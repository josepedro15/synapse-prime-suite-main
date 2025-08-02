import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useAdminCheck } from '@/hooks/useAdminCheck';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Settings, FileText, BarChart } from 'lucide-react';

export default function AdminPanel() {
  const { user } = useAuth();
  const { isAdmin, loading } = useAdminCheck();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/');
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Painel Administrativo</h1>
              <p className="text-muted-foreground mt-2">
                Gerencie usuários, serviços e configurações do sistema
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/dashboard')}
            >
              Voltar ao Dashboard
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Gerenciar Usuários
              </CardTitle>
              <CardDescription>
                Visualize e gerencie todos os usuários do sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Acessar Usuários
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Gerenciar Serviços
              </CardTitle>
              <CardDescription>
                Configure e gerencie os serviços oferecidos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Acessar Serviços
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Contratos
              </CardTitle>
              <CardDescription>
                Visualize e gerencie todos os contratos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Acessar Contratos
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                Relatórios
              </CardTitle>
              <CardDescription>
                Visualize estatísticas e relatórios do sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Ver Relatórios
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Configurações
              </CardTitle>
              <CardDescription>
                Configurações gerais do sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Configurações
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Sistema</CardTitle>
              <CardDescription>
                Estatísticas rápidas e informações importantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="text-2xl font-bold text-primary">0</h3>
                  <p className="text-sm text-muted-foreground">Usuários Ativos</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="text-2xl font-bold text-primary">7</h3>
                  <p className="text-sm text-muted-foreground">Serviços Disponíveis</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="text-2xl font-bold text-primary">0</h3>
                  <p className="text-sm text-muted-foreground">Contratos Ativos</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="text-2xl font-bold text-primary">R$ 0</h3>
                  <p className="text-sm text-muted-foreground">Receita Mensal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}