import { PostgrestError, AuthError } from '@supabase/supabase-js';
import { ApiError } from '@/types';

/**
 * Converte erros do Supabase para formato padronizado
 */
export function handleSupabaseError(error: PostgrestError | AuthError | Error | unknown): ApiError {
  if (error instanceof AuthError) {
    return {
      message: error.message,
      code: error.status?.toString(),
      details: error.name
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      details: error.name
    };
  }

  // Para erros do PostgrestError
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const postgrestError = error as PostgrestError;
    return {
      message: postgrestError.message,
      code: postgrestError.code,
      details: postgrestError.details
    };
  }

  // Fallback para erros desconhecidos
  return {
    message: 'Erro desconhecido ocorreu',
    details: 'Tente novamente mais tarde'
  };
}

/**
 * Verifica se um erro é um erro de rede
 */
export function isNetworkError(error: unknown): boolean {
  if (error instanceof Error) {
    return error.message.includes('network') || 
           error.message.includes('fetch') ||
           error.message.includes('timeout');
  }
  return false;
}

/**
 * Verifica se um erro é um erro de autenticação
 */
export function isAuthError(error: unknown): boolean {
  if (error instanceof AuthError) {
    return true;
  }
  
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const message = (error as { message: string }).message.toLowerCase();
    return message.includes('auth') || 
           message.includes('unauthorized') || 
           message.includes('forbidden');
  }
  
  return false;
}

/**
 * Log de erro para desenvolvimento (não em produção)
 */
export function logError(error: unknown, context?: string): void {
  if (import.meta.env.DEV) {
    console.group(`🚨 Error${context ? ` in ${context}` : ''}`);
    console.error(error);
    console.groupEnd();
  }
}

/**
 * Obtém mensagem de erro amigável para o usuário
 */
export function getUserFriendlyMessage(error: unknown): string {
  if (isNetworkError(error)) {
    return 'Erro de conexão. Verifique sua internet e tente novamente.';
  }

  if (isAuthError(error)) {
    return 'Erro de autenticação. Verifique suas credenciais.';
  }

  const apiError = handleSupabaseError(error);
  return apiError.message || 'Ocorreu um erro inesperado. Tente novamente.';
} 