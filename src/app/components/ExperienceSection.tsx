import { motion } from "motion/react";
import { ArrowRight, Building2 } from "lucide-react";

const hotelStats = [
  { value: "5★", label: "Estrelas" },
  { value: "50+", label: "Quartos" },
  { value: "98%", label: "Satisfação" },
  { value: "10+", label: "Anos" },
];

export function ExperienceSection() {
  return (
    <section id="hotel-escola" className="px-4 md:px-8 lg:px-16 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] bg-gradient-to-r from-[#205c2e] via-[#3d6816] to-[#1f6b35] p-8 md:p-12 lg:p-16 shadow-[0_30px_70px_rgba(21,52,25,0.22)]"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#d8aa2b]/12 flex items-center justify-center shrink-0">
                  <Building2 className="w-9 h-9 text-[#d8aa2b]" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#d8aa2b] leading-[0.95]">
                    Hotel-Escola
                    <br />
                    Capo Zorial
                  </h2>
                </div>
              </div>

              <p className="text-white/95 text-xl md:text-2xl leading-relaxed max-w-2xl">
                Anexo à Escola de Hotelaria, o Hotel Capo Zorial oferece uma
                experiência única de hospedagem no Recanto Maestro, sendo também o
                principal espaço de formação prática dos alunos.
              </p>

              <a
                href="https://hotelcapozorial.com.br/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 rounded-3xl bg-[#d8aa2b] text-white font-semibold text-xl hover:bg-[#c3981d] transition-colors"
              >
                Visitar o Hotel
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {hotelStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[22px] bg-white/12 border border-[#d8aa2b]/25 min-h-[140px] flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="flex items-center gap-1 text-[#d8aa2b] font-sans font-semibold text-4xl md:text-5xl leading-none tabular-nums">
                    <span>{item.value}</span>
                  </div>
                  <p className="mt-3 text-white/85 text-lg">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
