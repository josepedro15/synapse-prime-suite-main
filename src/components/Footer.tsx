import { Button } from "@/components/ui/button";
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/20">
      {/* CTA Section */}
      <div className="border-b border-border/20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Pronto para</span>
              {" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Automatizar</span>
              {" "}
              <span className="text-foreground">seu Negócio?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Comece sua jornada de transformação digital hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:glow-blue text-primary-foreground font-semibold px-8 py-4 text-lg group"
                asChild
              >
                <Link to="/auth">
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg"
                asChild
              >
                <Link to="/dashboard">Agendar Reunião</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Bot className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">AutomateAI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transformamos negócios através de automação inteligente, 
              integrações personalizadas e soluções de IA de ponta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass rounded-lg hover:border-primary/30 transition-all duration-300 hover:glow-blue">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="p-2 glass rounded-lg hover:border-accent/30 transition-all duration-300 hover:glow-orange">
                <Twitter className="w-5 h-5 text-accent" />
              </a>
              <a href="#" className="p-2 glass rounded-lg hover:border-primary/30 transition-all duration-300 hover:glow-blue">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Serviços</h3>
            <div className="space-y-4">
              {[
                "Automação com IA",
                "Integração de APIs",
                "Chatbots Inteligentes",
                "Painéis de BI",
                "Consultoria em IA",
                "Suporte Técnico"
              ].map((service, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Empresa</h3>
            <div className="space-y-4">
              {[
                "Sobre Nós",
                "Nossa Equipe",
                "Carreiras",
                "Blog",
                "Casos de Sucesso",
                "Parceiros"
              ].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">contato@automateai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">+55 (11) 9999-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Portal Access */}
            <div className="mt-8 p-4 glass rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Área do Cliente</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Acesse seu dashboard e acompanhe seus projetos
              </p>
              <Link to="/auth">
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Fazer Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 AutomateAI. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};