-- Atribuir permissões de administrador ao usuário jopedromkt@gmail.com
INSERT INTO public.user_roles (user_id, role) 
VALUES ('7f784f8d-ce6b-4c8c-bd3e-3421d259c44a', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;