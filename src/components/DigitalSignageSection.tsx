import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import cmsDashboard from "@/assets/dashboard-mockup.png";
import player from "@/assets/android-media-player.jpg";
import totemMain from "@/assets/totem-main.png";
import totem1 from "@/assets/totem-1.png";
import totem2 from "@/assets/totem-2.png";
import totem3 from "@/assets/totem-3.png";
import totem4 from "@/assets/totem-4.png";
import epaperDisplay from "@/assets/epaper-display.jpg";

const totemSecondary = [
  { src: totem1, alt: "Tótem digital en lobby de hotel", position: "25% center" },
  { src: totem2, alt: "Tótem digital con anuncio en aeropuerto", position: "center" },
  { src: totem3, alt: "Tótem digital con anuncio en museo", position: "25% center" },
  { src: totem4, alt: "Tótem digital en lobby de hotel", position: "100% center" },
];

const bubbles = ["Tótems interactivos", "Kioskos táctiles", "Gestión de colas", "Soluciones LED"];
const epaperBubbles = ["Reserva de salas", "Señalética inteligente"];

const DigitalSignageSection = () => (
  <section id="digital-signage" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            01
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Digital Signage</h2>
        </div>
      </ScrollReveal>

      {/* Intro block */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Soluciones digitales orientadas a la gestión eficiente del hotel, mejorando la comunicación con el huésped y
            ofreciendo información relevante en tiempo real en lobby, restaurantes, salas y zonas comunes.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 mt-6">
            {bubbles.map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.6, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 14 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground hover:bg-accent/20 hover:border-accent/60 transition-colors cursor-default shadow-sm"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Hero image + 4 secondary grid */}
      <ScrollReveal delay={0.15}>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 mb-20 max-w-4xl mx-auto">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-full min-h-[320px]"
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={totemMain}
              alt="Tótem digital interactivo principal con anuncio"
              className="w-full h-full object-cover object-[75%_center]"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {totemSecondary.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-lg border border-border group cursor-pointer aspect-[4/5]"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: t.position }}
                  loading="lazy"
                  width={896}
                  height={1152}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Sub-section: E-Paper (compact) */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-6 items-center mb-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">E-Paper</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Pantallas de papel electrónico a todo color para hoteles: ideales para señalética de habitaciones, reserva
              de salas de reuniones, directorios, menús del día y comunicación con el huésped, con bajo consumo y máxima visibilidad.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {epaperBubbles.map((label, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.6, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 14 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground hover:bg-accent/20 hover:border-accent/60 transition-colors cursor-default shadow-sm"
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="w-full max-w-[260px]"
            >
              <img
                src={epaperDisplay}
                alt="Pantalla de papel electrónico E-Paper"
                className="w-full h-auto object-contain"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
          </div>
        </div>
      </ScrollReveal>

      {/* Sub-section: Gestión de Contenido (compact) */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Gestión de Contenido</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Gestiona y actualiza de forma centralizada la información digital del hotel: ofertas, eventos, menús,
              promociones, comunicación al huésped y contenidos para pantallas en lobby, restaurantes, spa, salas de
              reuniones y zonas comunes.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="w-full max-w-[220px]"
            >
              <img
                src={cmsDashboard}
                alt="Panel de gestión de contenido"
                className="w-full h-auto object-contain"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="w-full max-w-[140px]"
            >
              <img
                src={player}
                alt="Android media player"
                className="w-full h-auto object-contain"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default DigitalSignageSection;
