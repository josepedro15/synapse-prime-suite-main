-- Criar enum para roles de usuário
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Criar tabela para roles dos usuários
CREATE TABLE public.user_roles (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Habilitar RLS na tabela user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para user_roles
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Função para verificar se um usuário tem uma role específica
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  );
$$;

-- Criar tabela de serviços
CREATE TABLE public.services (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10,2),
    duration_months INTEGER,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS na tabela services
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para services
CREATE POLICY "Anyone can view active services" 
ON public.services 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage services" 
ON public.services 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- Criar tabela de contratos
CREATE TABLE public.contracts (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    service_id uuid NOT NULL REFERENCES public.services(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'cancelled', 'completed')),
    start_date DATE,
    end_date DATE,
    monthly_price DECIMAL(10,2) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS na tabela contracts
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para contracts
CREATE POLICY "Users can view their own contracts" 
ON public.contracts 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all contracts" 
ON public.contracts 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage contracts" 
ON public.contracts 
FOR INSERT 
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update contracts" 
ON public.contracts 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

-- Criar tabela de serviços do cliente
CREATE TABLE public.client_services (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    service_name TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
    start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    next_billing_date DATE,
    monthly_price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS na tabela client_services
ALTER TABLE public.client_services ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para client_services
CREATE POLICY "Users can view their own services" 
ON public.client_services 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all client services" 
ON public.client_services 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage client services" 
ON public.client_services 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- Triggers para atualizar updated_at
CREATE TRIGGER update_services_updated_at
BEFORE UPDATE ON public.services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contracts_updated_at
BEFORE UPDATE ON public.contracts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_client_services_updated_at
BEFORE UPDATE ON public.client_services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Inserir serviços padrão
INSERT INTO public.services (name, description, price, duration_months) VALUES
('Criação de Site Básico', 'Site institucional básico com até 5 páginas', 1500.00, 1),
('Criação de Site Avançado', 'Site institucional avançado com funcionalidades customizadas', 3000.00, 2),
('E-commerce Básico', 'Loja virtual básica com até 100 produtos', 2500.00, 2),
('E-commerce Avançado', 'Loja virtual completa com funcionalidades avançadas', 5000.00, 3),
('Manutenção Mensal', 'Manutenção e atualizações mensais do site', 200.00, 1),
('SEO Básico', 'Otimização básica para motores de busca', 800.00, 1),
('SEO Avançado', 'Estratégia completa de SEO e marketing digital', 1500.00, 3);

-- Atribuir permissões de administrador ao usuário jopedromkt@gmail.com
INSERT INTO public.user_roles (user_id, role) 
VALUES ('7f784f8d-ce6b-4c8c-bd3e-3421d259c44a', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;