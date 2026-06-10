import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import aiAgent from "@/assets/movil.png";
import aiAvatar from "@/assets/avataar.png";

const blocks = [
  {
    title: "Agente IA",
    img: aiAgent,
    desc: "Asistente conversacional que automatiza reservas, atiende consultas del huésped y gestiona peticiones a recepción 24/7.",
  },
  {
    title: "Avatar IA",
    img: aiAvatar,
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
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
              05
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Inteligencia Artificial
            </h2>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Soluciones de IA pensadas para mejorar la atención al huésped,
              automatizar procesos del hotel y crear experiencias digitales más
              cercanas, rápidas y personalizadas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 max-w-6xl mx-auto">
          {blocks.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <motion.div
                className="relative flex flex-col items-center text-center group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <div
                  className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 md:w-[420px] md:h-[420px] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(var(--accent) / 0.35), transparent 70%)",
                  }}
                />

                <div className="relative h-[360px] md:h-[430px] w-full flex items-center justify-center mb-4">
                  <motion.img
                    src={b.img}
                    alt={b.title}
                    className={`relative z-10 object-contain transition-transform duration-700 group-hover:scale-105 ${
                      i === 0
                        ? "w-[360px] md:w-[520px] lg:w-[620px] scale-[1.6] md:scale-[1.85]"
                        : "w-[260px] md:w-[340px] lg:w-[390px]"
                    }`}
                    loading="lazy"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  />
                </div>

                <div className="max-w-md">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {b.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAgentSection;
