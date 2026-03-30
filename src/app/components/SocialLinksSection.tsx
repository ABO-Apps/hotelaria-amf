import { motion } from "motion/react";
import {
  ExternalLink,
  Globe,
  GraduationCap,
  Instagram,
  Mic2,
  Sparkles,
  Youtube,
} from "lucide-react";
import imagemA from "../assets/fotoaula-2.webp";
import imagemB from "../assets/fotoaula-7.webp";

const infoCards = [
  {
    title: "Instagram do curso",
    description: "Acompanhe novidades, rotina acadêmica e conteúdos do curso.",
    href: "https://www.instagram.com/hotelaria.amf/",
    icon: Instagram,
  },
  {
    title: "Site oficial do curso",
    description: "Acesse a página oficial do Tecnólogo em Hotelaria.",
    href: "https://www2.faculdadeam.edu.br/tecnologia-em-hotelaria/",
    icon: Globe,
  },
  {
    title: "Atlética da Hotelaria",
    description: "Veja ações, eventos e conteúdos da atlética do curso.",
    href: "https://www.instagram.com/atleticadahotelariaamf/",
    icon: GraduationCap,
  },
  {
    title: "Papo de Hotel",
    description: "Confira YouTube, Instagram e TikTok com conteúdos do setor.",
    href: "https://www.youtube.com/channel/UCxh9I3L9dFmKpqbI0vsudyA",
    icon: Mic2,
    extraLinks: [
      { label: "Instagram", href: "https://www.instagram.com/podcastpapodehotel/" },
      { label: "TikTok", href: "https://www.tiktok.com/@papodehotel?lang=pt-BR" },
    ],
  },
];

export function SocialLinksSection() {
  return (
    <section id="links" className="relative py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a4d2e]">
            O que faz esta formação se destacar
          </h2>
          <p className="text-lg md:text-xl text-[#2d5016] max-w-3xl mx-auto">
            Prática, visão global e canais ativos para acompanhar o universo da
            Hotelaria dentro e fora da sala de aula.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">
          <div className="grid sm:grid-cols-2 gap-6">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[30px] bg-white/80 border border-[#1a4d2e]/12 shadow-lg p-8 flex flex-col min-h-[300px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a4d2e] text-[#d8aa2b] flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#1a4d2e] leading-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-[#2d5016] leading-relaxed flex-1">{card.description}</p>

                {card.extraLinks ? (
                  <div className="flex flex-wrap gap-3 mt-6">
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[#b8860b] font-medium"
                    >
                      YouTube
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {card.extraLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[#b8860b] font-medium"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[#b8860b] font-medium"
                  >
                    Acessar
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[34px] overflow-hidden shadow-2xl min-h-[320px]"
            >
              <img
                src={imagemA}
                alt="Ambiente acadêmico do curso de Hotelaria"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[34px] overflow-hidden shadow-2xl min-h-[320px]"
            >
              <img
                src={imagemB}
                alt="Estrutura do curso de Hotelaria"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex items-center justify-center gap-3 text-[#2d5016]"
        >
          <Sparkles className="w-5 h-5 text-[#b8860b]" />
          <p className="text-center">
            Canais que conectam formação, mercado e vivência acadêmica.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
