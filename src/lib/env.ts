/**
 * Configurações de ambiente tipadas
 */
export const env = {
  NODE_ENV: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
} as const;

/**
 * Valida se as variáveis de ambiente necessárias estão definidas
 */
export function validateEnv(): void {
  const requiredVars = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY'
  ] as const;

  for (const varName of requiredVars) {
    if (!env[varName]) {
      throw new Error(`Variável de ambiente ${varName} não está definida`);
    }
  }
}

/**
 * Verifica se está em modo de desenvolvimento
 */
export function isDev(): boolean {
  return env.DEV;
}

/**
 * Verifica se está em modo de produção
 */
export function isProd(): boolean {
  return env.PROD;
} 