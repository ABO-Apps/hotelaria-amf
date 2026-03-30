import { motion } from "motion/react";
import logoHotelariaBranca from "../assets/Logo-Horizontal-Branca-1-2048x599.png.webp";

export function Footer() {
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Hotel-Escola", href: "#hotel-escola" },
    { label: "Oportunidades", href: "#oportunidades" },
    { label: "Links", href: "#links" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1a4d2e] to-[#0f2918] text-white py-16 px-4 md:px-8 lg:px-16">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d8aa2b] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div>
              <img
                src={logoHotelariaBranca}
                alt="Logo Hotelaria"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 leading-relaxed">
              Antonio Meneghetti Faculdade
            </p>
            <p className="text-white/70 leading-relaxed text-sm">
              Campus: Estrada Recanto Maestro, nº 338, Distrito Recanto Maestro,
              Restinga Sêca-RS, CEP: 97200-000, Brasil
            </p>
          </motion.div>

          {/* Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-serif text-[#d8aa2b]">Links Rápidos</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#d8aa2b] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#d8aa2b] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-serif text-[#d8aa2b]">Sobre a formação</h4>
            <p className="text-white/70 leading-relaxed">
              O curso também atende profissionais que já atuam no setor e desejam
              qualificar seus estabelecimentos e inovar em hospitalidade.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <p className="text-center text-xl md:text-2xl font-serif text-[#d8aa2b] italic">
            Antonio Meneghetti Faculdade, formação atualizada e alinhada às melhores práticas globais.
          </p>
          <p className="text-center text-sm text-white/50">
            © {new Date().getFullYear()} Antonio Meneghetti Faculdade. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#d8aa2b]/20 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#d8aa2b]/20 rounded-br-3xl" />
    </footer>
  );
}
