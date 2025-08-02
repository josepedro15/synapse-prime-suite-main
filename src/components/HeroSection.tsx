import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, BarChart3 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Bot className="absolute top-1/4 left-1/4 w-8 h-8 text-primary/30 animate-float" style={{ animationDelay: '0.5s' }} />
        <Zap className="absolute top-1/3 right-1/4 w-6 h-6 text-accent/30 animate-float" style={{ animationDelay: '1.5s' }} />
        <BarChart3 className="absolute bottom-1/3 left-1/3 w-7 h-7 text-primary/30 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-foreground">Transforme seu negócio com IA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Automação
            </span>
            {" "}
            <span className="text-foreground">que</span>
            {" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Revoluciona
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Integrações inteligentes com IA, chatbots avançados e painéis de BI que 
            <span className="text-primary font-semibold"> economizam até 80% do tempo</span> 
            {" "}dos seus processos
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:glow-blue text-primary-foreground font-semibold px-8 py-4 text-lg group transition-all duration-300"
              asChild
            >
              <a href="/auth">
                Fale com um Especialista
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:glow-orange"
              asChild
            >
              <a href="/dashboard">Portal do Cliente</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Automações Criadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Tempo Economizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};