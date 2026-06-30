-- ============================================================
-- AquiGarcia — Tabela de utilizadores (Supabase)
-- ============================================================
-- Execute isto no SQL Editor do Supabase para criar a tabela

CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  nome TEXT,
  telefone TEXT,
  endereco TEXT,
  cidade TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índice para busca rápida por email
CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email);

-- Enable RLS (Row Level Security)
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;

-- Política: Qualquer um pode criar (signup)
CREATE POLICY "Qualquer um pode inserir" ON usuarios
  FOR INSERT WITH CHECK (true);

-- Política: Utilizadores só veem os seus dados
CREATE POLICY "Utilizadores veem seus dados" ON usuarios
  FOR SELECT USING (auth.uid() = id);

-- Política: Utilizadores só atualizam os seus dados
CREATE POLICY "Utilizadores atualizam seus dados" ON usuarios
  FOR UPDATE USING (auth.uid() = id);
