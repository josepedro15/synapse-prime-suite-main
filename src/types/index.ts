// Tipos personalizados para o projeto
export interface ApiError {
  message: string;
  code?: string;
  details?: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  full_name: string | null;
  company: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  duration_months: number | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Contract {
  id: string;
  user_id: string;
  service_id: string;
  status: 'pending' | 'active' | 'cancelled' | 'completed';
  start_date: string | null;
  end_date: string | null;
  monthly_price: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface ClientService {
  id: string;
  user_id: string;
  service_name: string;
  description: string | null;
  status: 'active' | 'inactive' | 'suspended';
  start_date: string;
  next_billing_date: string | null;
  monthly_price: number;
  created_at: string;
  updated_at: string;
}

export type AppRole = 'admin' | 'user';

export interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  created_at: string;
}

// Tipos para formulários
export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignUpFormData {
  email: string;
  password: string;
  fullName: string;
}

export interface ProfileUpdateData {
  full_name: string;
  company: string;
  phone: string;
}

// Tipos para respostas da API
export interface ApiResponse<T> {
  data: T | null;
  error: ApiError | null;
}

// Tipos para componentes
export interface LoadingState {
  loading: boolean;
  error: string | null;
}

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationParams;
} 