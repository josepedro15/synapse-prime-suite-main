import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO",
    company: "TechCorp",
    content: "A automação desenvolvida pela equipe reduziu em 75% o tempo gasto com processos manuais. Resultado excepcional!",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "João Santos",
    role: "Diretor de TI",
    company: "InnovaTech",
    content: "O chatbot com IA revolucionou nosso atendimento. Agora conseguimos responder 80% das dúvidas automaticamente.",
    rating: 5,
    avatar: "JS"
  },
  {
    name: "Ana Costa",
    role: "Head de Marketing",
    company: "GrowthCo",
    content: "Os dashboards de BI nos deram insights incríveis. Tomamos decisões muito mais rápidas e assertivas.",
    rating: 5,
    avatar: "AC"
  }
];

const companies = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovaTech", logo: "IT" },
  { name: "GrowthCo", logo: "GC" },
  { name: "DataFlow", logo: "DF" },
  { name: "SmartSys", logo: "SS" },
  { name: "AutomateX", logo: "AX" }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium">
            <Quote className="w-4 h-4 text-accent" />
            <span>Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">O que nossos</span>
            {" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram seus processos com nossas soluções
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/20 hover:border-accent/30 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-secondary-foreground mb-8 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Companies */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-muted-foreground mb-12">
            Empresas que confiam em nós
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 glass rounded-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:glow-blue transition-all duration-300">
                  {company.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-20 p-8 glass rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Tempo de Resposta</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6 meses</div>
              <div className="text-sm text-muted-foreground">ROI Médio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};