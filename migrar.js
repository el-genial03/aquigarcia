/**
 * ================================================================
 * migrar.js — AquiGarcia
 * ================================================================
 * Este script faz UMA SÓ VEZ:
 *   1. Lê os produtos do teu index.html (ou defaultProducts no server.js)
 *   2. Faz upload de cada imagem em /imagens para o Cloudinary
 *   3. Guarda todos os produtos no Supabase com os novos URLs
 *
 * COMO USAR:
 *   1. Copia este ficheiro para a raiz do teu projecto (junto ao server.js)
 *   2. Cria o ficheiro .env com as variáveis (ver .env.example)
 *   3. Executa: node migrar.js
 *
 * Podes executar múltiplas vezes sem problema — faz upsert, não duplica.
 * ================================================================
 */

require('dotenv').config();
const fs   = require('fs');
const path = require('path');
const https = require('https');
const http  = require('http');

// ── Supabase ────────────────────────────────────────────────────
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// ── Cloudinary ──────────────────────────────────────────────────
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ── Configuração de caminhos ────────────────────────────────────
const ROOT      = __dirname;
const IMG_DIR   = path.join(ROOT, 'imagens');
const HTML_FILE = path.join(ROOT, 'index.html');
const SERVER_FILE = path.join(ROOT, 'server.js');

// ================================================================
// PASSO 1 — Ler produtos do ficheiro local
// ================================================================
function lerProdutosLocais() {
  // Tenta ler do bloco /*__PRODUCTS_START__*/ no index.html
  if (fs.existsSync(HTML_FILE)) {
    const html = fs.readFileSync(HTML_FILE, 'utf8');
    const match = html.match(/\/\*__PRODUCTS_START__\*\/([\s\S]*?)\/\*__PRODUCTS_END__\*\//);
    if (match) {
      try {
        const produtos = JSON.parse(match[1].trim());
        console.log(`✅ Lidos ${produtos.length} produtos do index.html`);
        return produtos;
      } catch(e) {
        console.log('⚠️ Erro a parsear bloco do index.html:', e.message);
      }
    }
  }

  // Tenta ler defaultProducts do server.js
  if (fs.existsSync(SERVER_FILE)) {
    const src = fs.readFileSync(SERVER_FILE, 'utf8');
    const match = src.match(/const defaultProducts\s*=\s*(\[[\s\S]*?\]);\s*\n/);
    if (match) {
      try {
        const produtos = JSON.parse(match[1]);
        console.log(`✅ Lidos ${produtos.length} produtos do defaultProducts no server.js`);
        return produtos;
      } catch(e) {
        console.log('⚠️ Erro a parsear defaultProducts:', e.message);
      }
    }
  }

  // Tenta ler de um ficheiro produtos.json se existir
  const jsonFile = path.join(ROOT, 'produtos.json');
  if (fs.existsSync(jsonFile)) {
    const produtos = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    console.log(`✅ Lidos ${produtos.length} produtos do produtos.json`);
    return produtos;
  }

  throw new Error('Não foi possível encontrar nenhuma fonte de produtos! Verifica index.html, server.js ou produtos.json.');
}

// ================================================================
// PASSO 2 — Fazer download de URL remoto (para imagens http/https)
// ================================================================
function downloadUrl(imageUrl) {
  return new Promise((resolve, reject) => {
    const client = imageUrl.startsWith('https') ? https : http;
    client.get(imageUrl, (response) => {
      if (response.statusCode !== 200) {
        return reject(new Error(`HTTP ${response.statusCode} para ${imageUrl}`));
      }
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

// ================================================================
// PASSO 3 — Upload de uma imagem para o Cloudinary
// ================================================================
async function uploadParaCloudinary(imagemLocal, publicId) {
  // Se a imagem já é um URL do Cloudinary, não precisa de fazer nada
  if (imagemLocal && imagemLocal.includes('cloudinary.com')) {
    return imagemLocal;
  }

  let buffer = null;

  // Caso 1: caminho local /imagens/nome.jpg → ler do disco
  if (imagemLocal && (imagemLocal.startsWith('/imagens/') || imagemLocal.startsWith('imagens/'))) {
    const nomeImagem = path.basename(imagemLocal);
    const caminhoLocal = path.join(IMG_DIR, nomeImagem);
    if (fs.existsSync(caminhoLocal)) {
      buffer = fs.readFileSync(caminhoLocal);
    } else {
      console.log(`   ⚠️  Imagem não encontrada no disco: ${caminhoLocal}`);
      return imagemLocal; // Mantém o caminho antigo se não encontrar
    }
  }
  // Caso 2: URL http/https externo → fazer download
  else if (imagemLocal && (imagemLocal.startsWith('http://') || imagemLocal.startsWith('https://'))) {
    try {
      buffer = await downloadUrl(imagemLocal);
    } catch(e) {
      console.log(`   ⚠️  Não foi possível fazer download de: ${imagemLocal} — ${e.message}`);
      return imagemLocal;
    }
  }
  // Caso 3: imagem vazia ou sem caminho
  else {
    return imagemLocal || '';
  }

  // Upload para Cloudinary
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'aquigarcia',
        public_id: publicId,
        overwrite: true,
        resource_type: 'image',
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );
    stream.end(buffer);
  });
}

// ================================================================
// PASSO 4 — Guardar produtos no Supabase
// ================================================================
async function guardarNoSupabase(produtos) {
  console.log(`\n📤 A guardar ${produtos.length} produtos no Supabase...`);
  
  // O Supabase tem limite de 1000 por upsert, então fazemos em lotes
  const LOTE = 100;
  for (let i = 0; i < produtos.length; i += LOTE) {
    const lote = produtos.slice(i, i + LOTE);
    const { error } = await supabase
      .from('produtos')
      .upsert(lote, { onConflict: 'id' });
    if (error) {
      console.error(`❌ Erro ao guardar lote ${i}-${i + LOTE}:`, error.message);
      throw error;
    }
    console.log(`   ✅ Guardados produtos ${i + 1} a ${Math.min(i + LOTE, produtos.length)}`);
  }
}

// ================================================================
// FUNÇÃO PRINCIPAL
// ================================================================
async function migrar() {
  console.log('');
  console.log('╔════════════════════════════════════════════╗');
  console.log('║     AquiGarcia — Script de Migração        ║');
  console.log('║     Local → Supabase + Cloudinary          ║');
  console.log('╚════════════════════════════════════════════╝');
  console.log('');

  // Verificar variáveis de ambiente
  const varsFaltando = [];
  if (!process.env.SUPABASE_URL)            varsFaltando.push('SUPABASE_URL');
  if (!process.env.SUPABASE_KEY)            varsFaltando.push('SUPABASE_KEY');
  if (!process.env.CLOUDINARY_CLOUD_NAME)   varsFaltando.push('CLOUDINARY_CLOUD_NAME');
  if (!process.env.CLOUDINARY_API_KEY)      varsFaltando.push('CLOUDINARY_API_KEY');
  if (!process.env.CLOUDINARY_API_SECRET)   varsFaltando.push('CLOUDINARY_API_SECRET');
  
  if (varsFaltando.length > 0) {
    console.error('❌ ERRO: As seguintes variáveis de ambiente estão em falta no .env:');
    varsFaltando.forEach(v => console.error(`   - ${v}`));
    console.error('\nCria o ficheiro .env com base no .env.example e tenta novamente.');
    process.exit(1);
  }

  // Passo 1: Ler produtos locais
  console.log('📂 PASSO 1 — A ler produtos locais...');
  const produtos = lerProdutosLocais();
  console.log('');

  // Passo 2: Fazer upload de todas as imagens para Cloudinary
  console.log('🖼️  PASSO 2 — A fazer upload das imagens para Cloudinary...');
  console.log(`   Total de produtos: ${produtos.length}`);
  console.log('');

  let uploadados = 0;
  let saltados = 0;
  let erros = 0;

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const progresso = `[${i + 1}/${produtos.length}]`;

    if (!produto.img) {
      console.log(`   ${progresso} ⏭️  Sem imagem: "${produto.name}"`);
      saltados++;
      continue;
    }

    // Já é um URL do Cloudinary → saltar
    if (produto.img.includes('cloudinary.com')) {
      console.log(`   ${progresso} ☁️  Já no Cloudinary: "${produto.name}"`);
      saltados++;
      continue;
    }

    try {
      const publicId = 'produto_' + String(produto.id).replace(/[^a-zA-Z0-9]/g, '_');
      process.stdout.write(`   ${progresso} ⬆️  A fazer upload: "${produto.name}"... `);
      
      const novoUrl = await uploadParaCloudinary(produto.img, publicId);
      produto.img = novoUrl;
      
      if (novoUrl.includes('cloudinary.com')) {
        console.log('✅');
        uploadados++;
      } else {
        console.log('⚠️ (manteve caminho antigo)');
        saltados++;
      }
    } catch(e) {
      console.log(`❌ ERRO: ${e.message}`);
      erros++;
    }
  }

  console.log('');
  console.log(`📊 Resultado dos uploads:`);
  console.log(`   ✅ Uploadados:  ${uploadados}`);
  console.log(`   ⏭️  Saltados:    ${saltados}`);
  console.log(`   ❌ Com erros:   ${erros}`);
  console.log('');

  // Passo 3: Guardar no Supabase
  console.log('🗄️  PASSO 3 — A guardar no Supabase...');
  await guardarNoSupabase(produtos);

  // Passo 4: Verificar
  console.log('');
  console.log('🔍 PASSO 4 — A verificar...');
  const { data, error } = await supabase.from('produtos').select('id', { count: 'exact' });
  if (error) {
    console.error('❌ Erro ao verificar:', error.message);
  } else {
    console.log(`   ✅ ${data.length} produtos confirmados no Supabase`);
  }

  console.log('');
  console.log('╔════════════════════════════════════════════╗');
  console.log('║   ✅ MIGRAÇÃO CONCLUÍDA COM SUCESSO!        ║');
  console.log('╠════════════════════════════════════════════╣');
  console.log('║   Podes agora fazer deploy do server.js    ║');
  console.log('║   Os produtos estão na nuvem para sempre!  ║');
  console.log('╚════════════════════════════════════════════╝');
  console.log('');
}

// Executar
migrar().catch(err => {
  console.error('\n❌ ERRO FATAL na migração:', err.message);
  console.error(err.stack);
  process.exit(1);
});
