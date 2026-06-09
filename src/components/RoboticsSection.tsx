import { motion } from "framer-motion";
import { Bot, Utensils, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import roboticaImg from "@/assets/roboo.png";

const roboticsFeatures = [
  {
    icon: Bot,
    title: "Robot asistente de hoteles",
    desc: "Ayuda al huésped en recepción, lobby o zonas comunes, ofreciendo información, orientación y soporte básico de forma autónoma.",
  },
  {
    icon: Utensils,
    title: "Robot camarero",
    desc: "Puede apoyar en tareas de servicio, transporte de productos o entregas internas, reduciendo tiempos y mejorando la experiencia del cliente.",
  },
];

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
              Soluciones robóticas para hoteles que combinan atención al huésped,
              apoyo operativo y una experiencia tecnológica diferencial.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-[1fr_0.9fr] gap-8 items-center max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="grid gap-4">
              {roboticsFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={2} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-foreground mb-1">
                        {item.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="relative flex justify-center">
              <motion.div
                className="absolute -inset-5 rounded-[2rem] blur-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--accent) / 0.25), transparent 70%)",
                }}
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative z-10 w-full max-w-[360px] rounded-[2rem] overflow-hidden shadow-2xl border border-accent/20"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <img
                  src={roboticaImg}
                  alt="Robot asistente para hoteles"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RoboticsSection;
