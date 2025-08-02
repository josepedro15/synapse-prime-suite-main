# Synapse Prime Suite

Uma plataforma completa de automação empresarial com integrações inteligentes, chatbots avançados e painéis de BI.

## 🚀 Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Real-time)
- **Roteamento**: React Router DOM
- **Estado**: React Query (TanStack Query)
- **Formulários**: React Hook Form + Zod
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Supabase

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <URL_DO_REPOSITORIO>
cd synapse-prime-suite-main
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais do Supabase:
```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

4. **Execute as migrações do banco**
```bash
npx supabase db push
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   └── ...             # Componentes específicos
├── hooks/              # Custom hooks
├── integrations/       # Integrações externas
│   └── supabase/       # Configuração do Supabase
├── lib/                # Utilitários e configurações
├── pages/              # Páginas da aplicação
├── types/              # Definições de tipos TypeScript
└── main.tsx            # Ponto de entrada
```

## 🎯 Funcionalidades

### Para Clientes
- ✅ Sistema de autenticação completo
- ✅ Dashboard personalizado
- ✅ Atualização de perfil
- ✅ Visualização de serviços contratados

### Para Administradores
- ✅ Painel administrativo
- ✅ Gestão de usuários
- ✅ Gestão de serviços
- ✅ Visualização de contratos
- ✅ Relatórios e estatísticas

### Serviços Disponíveis
- Criação de Site Básico (R$ 1.500)
- Criação de Site Avançado (R$ 3.000)
- E-commerce Básico (R$ 2.500)
- E-commerce Avançado (R$ 5.000)
- Manutenção Mensal (R$ 200)
- SEO Básico (R$ 800)
- SEO Avançado (R$ 1.500)

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento
npm run build            # Build para produção
npm run preview          # Preview do build

# Qualidade de Código
npm run lint             # Executa ESLint
npm run lint:fix         # Corrige problemas do ESLint
npm run format           # Formata código com Prettier
npm run format:check     # Verifica formatação
npm run type-check       # Verifica tipos TypeScript
```

## 🔧 Configurações

### TypeScript
- Configuração rigorosa com `strict: true`
- Verificação de tipos em tempo de compilação
- Path mapping para imports limpos

### ESLint
- Regras rigorosas para TypeScript
- Regras de segurança
- Integração com React Hooks

### Prettier
- Formatação consistente
- Integração com ESLint
- Configuração para TypeScript/React

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`

## 📊 Banco de Dados

O projeto usa Supabase com as seguintes tabelas:

- **profiles**: Perfis dos usuários
- **user_roles**: Sistema de permissões
- **services**: Catálogo de serviços
- **contracts**: Contratos dos clientes
- **client_services**: Serviços ativos dos clientes

## 🔒 Segurança

- Row Level Security (RLS) habilitado
- Autenticação via Supabase Auth
- Validação de formulários com Zod
- Políticas de acesso por usuário

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

Para suporte, envie um email para suporte@synapseprime.com ou abra uma issue no GitHub.

---

**Desenvolvido com ❤️ pela equipe Synapse Prime**
