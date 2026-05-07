# 🚀 Guia Completo de Migração — AquiGarcia
## Local → Supabase + Cloudinary + Zoho Host / Render

---

## PARTE 1 — CRIAR CONTA E TABELA NO SUPABASE

### 1.1 Criar conta
1. Vai a https://supabase.com e clica **Start for free**
2. Cria conta com Google ou GitHub
3. Clica **New Project**
4. Escolhe um nome (ex: `aquigarcia`), define uma password forte, escolhe região **Europe West** (mais perto de Angola)
5. Aguarda 2 minutos enquanto o projecto é criado

### 1.2 Criar a tabela `produtos`
1. No menu lateral, clica em **SQL Editor**
2. Clica em **New Query**
3. Cola este SQL e clica **Run**:

```sql
CREATE TABLE IF NOT EXISTS produtos (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT DEFAULT 'alimenticios',
  price       NUMERIC DEFAULT 0,
  stock       INTEGER DEFAULT 0,
  desc        TEXT DEFAULT '',
  img         TEXT DEFAULT '',
  encomenda   BOOLEAN DEFAULT false,
  created_at  TIMESTAMP DEFAULT NOW()
);

-- Permitir leitura pública (o teu site precisa disto)
ALTER TABLE produtos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Leitura pública" ON produtos
  FOR SELECT USING (true);

CREATE POLICY "Escrita com service key" ON produtos
  FOR ALL USING (true);
```

### 1.3 Copiar as credenciais
1. No menu lateral, clica em **Settings** → **API**
2. Copia:
   - **Project URL** → vai para `SUPABASE_URL` no .env
   - **anon public** (em "Project API keys") → vai para `SUPABASE_KEY` no .env

---

## PARTE 2 — CRIAR CONTA NO CLOUDINARY

1. Vai a https://cloudinary.com e clica **Sign up for free**
2. Preenche os dados e confirma o email
3. No Dashboard, encontras logo:
   - **Cloud Name** → `CLOUDINARY_CLOUD_NAME`
   - **API Key** → `CLOUDINARY_API_KEY`
   - **API Secret** (clica em "reveal") → `CLOUDINARY_API_SECRET`

---

## PARTE 3 — CONFIGURAR O PROJECTO LOCAL

### 3.1 Instalar as dependências novas
Abre o terminal na pasta do teu projecto e executa:

```bash
npm install @supabase/supabase-js cloudinary dotenv
```

### 3.2 Criar o ficheiro .env
1. Copia o ficheiro `.env.example` e renomeia para `.env`
2. Preenche com as tuas credenciais reais:

```env
SUPABASE_URL=https://xxxxxx.supabase.co
SUPABASE_KEY=eyJhbGci...
CLOUDINARY_CLOUD_NAME=o-teu-nome
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=abc123...
PORT=3000
```

### 3.3 Criar o .gitignore (IMPORTANTE!)
Cria um ficheiro `.gitignore` na raiz do projecto com:

```
.env
node_modules/
```

Isto evita que as tuas credenciais sejam expostas no GitHub.

---

## PARTE 4 — MIGRAR OS DADOS

Agora vais copiar todos os produtos locais para a nuvem:

```bash
node migrar.js
```

O script vai:
- ✅ Ler todos os produtos do teu index.html / server.js
- ✅ Fazer upload de cada imagem da pasta /imagens para o Cloudinary
- ✅ Guardar todos os produtos no Supabase com os novos URLs
- ✅ Confirmar quantos produtos foram migrados

**Este processo pode demorar 5-15 minutos** dependendo do número de imagens.

---

## PARTE 5 — TESTAR LOCALMENTE

Antes de fazer deploy, testa que tudo funciona no teu PC:

```bash
node server.js
```

Abre http://localhost:3000 e verifica:
- [ ] O site carrega normalmente
- [ ] Os produtos aparecem (vindo do Supabase)
- [ ] As imagens carregam (vindo do Cloudinary)
- [ ] O painel /admin consegue adicionar um produto de teste
- [ ] O produto de teste aparece no site

---

## PARTE 6 — DEPLOY NA ZOHO HOST

### 6.1 Preparar os ficheiros
Copia para a Zoho Host os seguintes ficheiros/pastas:
- `server.js` (o novo, com Supabase + Cloudinary)
- `index.html`
- `package.json` (o novo, com as 4 dependências)
- `migrar.js` (opcional, só precisas dele uma vez)
- A pasta `imagens/` (para servir as imagens antigas que ainda não migraste)
- **NÃO** copies: `node_modules/`, `.env`

### 6.2 Configurar variáveis de ambiente na Zoho Host
Na interface da Zoho Host, procura a secção de **Environment Variables** ou **Variáveis de Ambiente** e adiciona:

```
SUPABASE_URL     = https://xxxxxx.supabase.co
SUPABASE_KEY     = eyJhbGci...
CLOUDINARY_CLOUD_NAME = o-teu-nome
CLOUDINARY_API_KEY    = 123456789
CLOUDINARY_API_SECRET = abc123...
PORT             = (deixa a Zoho definir automaticamente)
```

### 6.3 Instalar dependências na Zoho Host
Na Zoho Host, no terminal ou nas configurações de deploy, executa:

```bash
npm install
```

### 6.4 Iniciar o servidor
Comando de start:
```bash
node server.js
```
ou, se a Zoho Host suportar, usa o script:
```bash
npm start
```

---

## PARTE 7 — DEPLOY NO RENDER (alternativa gratuita)

Se a Zoho Host não funcionar, o Render é mais fácil:

1. Vai a https://render.com e cria conta gratuita
2. Clica **New** → **Web Service**
3. Conecta o teu repositório GitHub
4. Configura:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Em **Environment Variables**, adiciona as mesmas variáveis do .env
6. Clica **Create Web Service**
7. Aguarda o deploy (3-5 minutos)

---

## VERIFICAÇÃO FINAL

Após o deploy, testa:

```
https://o-teu-site.com/api/products
```

Deves ver um JSON com todos os teus produtos. Se sim, o site está a funcionar 100% na nuvem!

---

## PROBLEMAS COMUNS

### "Cannot find module '@supabase/supabase-js'"
→ Executa `npm install` na pasta do projecto

### "Invalid API key" no Supabase
→ Verifica se copiaste a chave `anon public`, não a `service_role`

### Imagens não carregam após migração
→ As imagens antigas em `/imagens` ainda funcionam via ficheiro estático.
→ Os novos produtos usam URLs do Cloudinary automaticamente.

### "EADDRINUSE: Port 3000 in use"
→ Já tens outro servidor a correr. Fecha-o ou muda o PORT no .env

---

*Guia criado para AquiGarcia — migração Supabase + Cloudinary*
