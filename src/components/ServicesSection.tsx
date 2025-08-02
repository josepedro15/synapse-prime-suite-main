import { Bot, Zap, BarChart3, Link, Cpu, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Zap,
    title: "Automação de Processos com IA",
    description: "Automatize tarefas repetitivas e otimize workflows com inteligência artificial avançada.",
    features: ["Análise de dados em tempo real", "Automação de emails", "Processamento de documentos"],
    color: "primary"
  },
  {
    icon: Link,
    title: "Integração com APIs e CRMs",
    description: "Conecte todos os seus sistemas e ferramentas em uma plataforma unificada.",
    features: ["Sincronização de dados", "Webhooks personalizados", "Conectores nativos"],
    color: "accent"
  },
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Chatbots com IA que entendem contexto e proporcionam experiências personalizadas.",
    features: ["Processamento de linguagem natural", "Aprendizado contínuo", "Integração multicanal"],
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Painéis de BI e Relatórios",
    description: "Dashboards interativos e relatórios inteligentes para tomada de decisão estratégica.",
    features: ["Visualizações dinâmicas", "Alertas automáticos", "Análise preditiva"],
    color: "accent"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium">
            <Cpu className="w-4 h-4 text-primary" />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Soluções que</span>
            {" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Transformam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um ecossistema completo de automação e inteligência artificial 
            para modernizar e otimizar seus processos de negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isAccent = service.color === "accent";
            
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/20 hover:border-primary/30 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${isAccent ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'} group-hover:${isAccent ? 'glow-orange' : 'glow-blue'} transition-all duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`}></div>
                        <span className="text-secondary-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Tecnologias que Utilizamos
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "OpenAI", "Supabase", "n8n", "Zapier", "HubSpot", 
              "Salesforce", "Google AI", "Microsoft Power Platform"
            ].map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover:border-primary/30 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};