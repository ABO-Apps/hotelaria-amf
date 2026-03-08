import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Utensils, Building2, Wine, Users, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface Experience {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  highlights: string[];
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const experiences: Experience[] = [
    {
      title: "Gastronomia de Excelência",
      description:
        "Domine técnicas culinárias internacionais e gestão de restaurantes fine dining em nossa cozinha profissional.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
      icon: Utensils,
      highlights: ["500+ horas práticas", "Chefs renomados", "Cozinha profissional"],
    },
    {
      title: "Gestão Hoteleira Premium",
      description:
        "Experiência hands-on no Hotel Capo Zorial, aprendendo todos os aspectos da gestão hoteleira moderna.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
      icon: Building2,
      highlights: ["8 departamentos", "Hotel 5 estrelas", "Gestão completa"],
    },
    {
      title: "Sommelier & Mixologia",
      description:
        "Conheça o mundo dos vinhos e mixologia premium. Desenvolva seu paladar em nossa adega climatizada.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80",
      icon: Wine,
      highlights: ["300+ rótulos", "Adega premium", "Harmonizações"],
    },
    {
      title: "Eventos & Experiências",
      description:
        "Planeje e execute eventos memoráveis, desde casamentos luxuosos até conferências corporativas internacionais.",
      image: "https://images.unsplash.com/photo-1519167758481-83f29da8c2b8?w=1200&q=80",
      icon: Users,
      highlights: ["120+ eventos/ano", "Experiências únicas", "Network global"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section ref={sectionRef} className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent via-white/40 to-transparent backdrop-blur-sm overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 right-10 w-64 h-64 bg-[#f4d03f]/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-[#1a4d2e]/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1a4d2e] to-[#2d5016] rounded-full mb-4"
          >
            <Sparkles className="w-5 h-5 text-[#f4d03f]" />
            <span className="text-white font-serif">Experiências Transformadoras</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#1a4d2e] leading-tight">
            Vivencie a hotelaria desde<br />
            <span className="text-[#f4d03f]">o primeiro semestre</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2d5016] max-w-4xl mx-auto leading-relaxed">
            Na AMF você aprende na prática em um ambiente profissional
          </p>
        </motion.div>

        {/* Modern Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] md:h-[700px]">
            {experiences.map((experience, index) => {
              const offset = (index - currentSlide + experiences.length) % experiences.length;
              const isActive = offset === 0;
              const isPrev = offset === experiences.length - 1;
              const isNext = offset === 1;

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: `${offset * 100}%`,
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.5 : 0,
                    zIndex: isActive ? 10 : isPrev || isNext ? 5 : 0,
                    filter: isActive ? "blur(0px)" : "blur(4px)",
                  }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 flex items-center justify-center px-8"
                >
                  <div className="w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl">
                    <div className="grid md:grid-cols-2 h-full">
                      {/* Image Side */}
                      <div className="relative h-[300px] md:h-full overflow-hidden">
                        <motion.img
                          src={experience.image}
                          alt={experience.title}
                          className="w-full h-full object-cover"
                          animate={{ scale: isActive ? 1 : 1.2 }}
                          transition={{ duration: 0.7 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e]/80 via-[#1a4d2e]/50 to-transparent" />
                        
                        {/* Icon Badge */}
                        <motion.div
                          animate={{ 
                            rotate: isActive ? 0 : 180,
                            scale: isActive ? 1 : 0.8 
                          }}
                          transition={{ duration: 0.7 }}
                          className="absolute top-8 left-8 bg-[#f4d03f] p-5 rounded-3xl shadow-xl"
                        >
                          <experience.icon className="w-8 h-8 text-[#1a4d2e]" />
                        </motion.div>

                        {/* Highlights */}
                        <div className="absolute bottom-8 left-8 right-8 space-y-3">
                          {experience.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ 
                                x: isActive ? 0 : -20, 
                                opacity: isActive ? 1 : 0 
                              }}
                              transition={{ delay: isActive ? 0.2 + idx * 0.1 : 0 }}
                              className="inline-block bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#1a4d2e] font-medium mr-2"
                            >
                              {highlight}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                        <motion.div
                          animate={{ 
                            y: isActive ? 0 : 20,
                            opacity: isActive ? 1 : 0 
                          }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-3xl md:text-4xl font-serif text-[#1a4d2e] mb-4 leading-tight">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-[#2d5016] leading-relaxed">
                            {experience.description}
                          </p>
                        </motion.div>

                        <motion.button
                          animate={{ 
                            y: isActive ? 0 : 20,
                            opacity: isActive ? 1 : 0 
                          }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1a4d2e] to-[#2d5016] text-[#f4d03f] rounded-2xl hover:shadow-xl transition-shadow w-fit"
                        >
                          <span className="font-semibold">Saiba mais</span>
                          <ChevronRight className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="pointer-events-auto w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#f4d03f] transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 text-[#1a4d2e]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="pointer-events-auto w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#f4d03f] transition-colors group"
            >
              <ChevronRight className="w-6 h-6 text-[#1a4d2e]" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {experiences.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                animate={{
                  width: currentSlide === index ? "40px" : "12px",
                  backgroundColor: currentSlide === index ? "#f4d03f" : "#1a4d2e",
                  opacity: currentSlide === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
                className="h-3 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Hotel Capo Zorial Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 relative"
        >
          <div className="bg-gradient-to-br from-[#1a4d2e] via-[#2d5016] to-[#1a4d2e] rounded-[40px] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Animated background patterns */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f4d03f]/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f4d03f]/10 rounded-full blur-3xl"
            />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Building2 className="w-10 h-10 text-[#f4d03f]" />
                  <h3 className="text-4xl md:text-5xl font-serif text-[#f4d03f]">
                    Hotel-Escola<br />Capo Zorial
                  </h3>
                </div>
                <p className="text-xl leading-relaxed text-white/90">
                  Anexo à Escola de Hotelaria, o Hotel Capo Zorial oferece uma experiência única 
                  de hospedagem no Recanto Maestro, sendo também o principal espaço de formação 
                  prática dos alunos.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#f4d03f] text-[#1a4d2e] rounded-2xl hover:bg-[#ffd700] transition-colors group mt-4 font-semibold"
                >
                  <span>Visitar o Hotel</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Estrelas", value: "5★" },
                  { label: "Quartos", value: "50+" },
                  { label: "Satisfação", value: "98%" },
                  { label: "Anos", value: "10+" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-[#f4d03f]/20"
                  >
                    <div className="text-4xl font-serif text-[#f4d03f] mb-2">{item.value}</div>
                    <div className="text-sm text-white/70">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}