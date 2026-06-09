import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import aiAgent from "@/assets/movil.png";
import aiAvatar from "@/assets/avataar.png";

const blocks = [
  {
    title: "Agente IA",
    img: aiAgent,
    url: "https://demo-logopost.com/agente-ia",
    desc: "Asistente conversacional que automatiza reservas, atiende consultas del huésped y gestiona peticiones a recepción 24/7.",
  },
  {
    title: "Avatar IA",
    img: aiAvatar,
    url: "https://demo-logopost.com/avatar-ia",
    desc: "Conserje virtual humano y empático que recibe al huésped por voz y gesto en pantallas y tótems del lobby.",
  },
];

const AiAgentSection = () => {
  return (
    <section
      id="inteligencia-artificial"
      className="py-12 md:py-16 bg-background relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
              05
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Inteligencia Artificial
            </h2>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Soluciones de IA pensadas para mejorar la atención al huésped, automatizar procesos del hotel y crear
              experiencias digitales más cercanas, rápidas y personalizadas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {blocks.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <motion.a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <div
                  className="absolute -inset-4 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(var(--accent) / 0.35), transparent 70%)",
                  }}
                />

                <div className="relative rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl hover:border-accent/50 transition-all duration-300">
                  <div
                    className={`relative h-[280px] md:h-[340px] overflow-hidden ${
                      i === 0 ? "bg-black" : "bg-muted"
                    }`}
                  >
                    <img
                      src={b.img}
                      alt={b.title}
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                        i === 0 ? "object-contain p-8" : "object-cover"
                      }`}
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-4 py-2 text-xs font-bold text-white border border-white/20">
                        Ver demo
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {b.title}
                    </h3>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAgentSection;
