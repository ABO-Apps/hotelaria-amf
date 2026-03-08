import { motion } from "motion/react";
import { Instagram, Youtube, Building2, GraduationCap } from "lucide-react";

export function Footer() {
  const links = [
    { label: "Vestibular", href: "#vestibular" },
    { label: "Hotel Capo Zorial", href: "#hotel" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Youtube, href: "#youtube", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1a4d2e] to-[#0f2918] text-white py-16 px-4 md:px-8 lg:px-16">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f4d03f] to-transparent" />

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
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-[#f4d03f]" />
              <h3 className="text-2xl font-serif">Hotelaria AMF</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Antonio Meneghetti Faculdade
            </p>
            <div className="flex items-center gap-2 text-[#f4d03f]">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm">Formação Internacional em Hotelaria</span>
            </div>
          </motion.div>

          {/* Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-serif text-[#f4d03f]">Links Rápidos</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#f4d03f] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#f4d03f] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-serif text-[#f4d03f]">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f4d03f] hover:text-[#1a4d2e] transition-colors group"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
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
          <p className="text-center text-xl md:text-2xl font-serif text-[#f4d03f] italic">
            Hotelaria AMF — transformando hospitalidade em carreira internacional.
          </p>
          <p className="text-center text-sm text-white/50">
            © {new Date().getFullYear()} Antonio Meneghetti Faculdade. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#f4d03f]/20 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#f4d03f]/20 rounded-br-3xl" />
    </footer>
  );
}