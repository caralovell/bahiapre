import { motion } from "framer-motion";
import { Bot, Handshake, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import roboticaImg from "@/assets/roboo.png";

const RoboticsSection = () => {
  return (
    <section
      id="robotica"
      className="py-10 md:py-12 bg-surface relative overflow-hidden"
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
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-3">
              06
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Robótica
            </h2>

            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Robots inteligentes para acompañar al huésped, ofrecer información, resolver dudas frecuentes
              y crear una experiencia innovadora en espacios como recepción, lobby o zonas comunes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-[1fr_0.8fr] gap-8 items-center max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="grid gap-3">
              <motion.div
                whileHover={{ y: -3 }}
                className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">
                    Atención autónoma
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    El robot puede orientar al huésped, responder preguntas y actuar como punto de información móvil.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Handshake className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">
                    Experiencia cercana
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Humaniza la tecnología con interacciones naturales, visuales y fáciles de entender.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">
                    Impacto visual
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Aporta un punto diferencial al hotel y refuerza la percepción de innovación.
                  </p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="relative flex justify-center">
              <motion.div
                className="absolute -inset-5 rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--accent) / 0.25), transparent 70%)",
                }}
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.img
                src={roboticaImg}
                alt="Robot inteligente para hoteles"
                className="relative z-10 w-full max-w-[260px] md:max-w-[300px] h-auto object-contain drop-shadow-2xl"
                loading="lazy"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RoboticsSection;
