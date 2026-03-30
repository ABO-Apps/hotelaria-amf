import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { InteractiveForm } from "./InteractiveForm";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a4d2e] rounded-full"
              >
                <Globe className="w-4 h-4 text-[#d8aa2b]" />
                <span className="text-sm text-white">Antonio Meneghetti Faculdade</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1a4d2e] leading-tight">
                Tecnólogo em Hotelaria
              </h1>
            </div>

            <p className="text-lg text-[#2d5016] leading-relaxed max-w-xl">
              Desde o primeiro semestre, você vivencia práticas em um ambiente
              profissional, preparado para atuar com excelência em um dos setores
              mais dinâmicos da hospitalidade.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-2xl md:text-3xl text-[#1a4d2e] font-serif italic">
                Transforme seu futuro em uma carreira de sucesso.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InteractiveForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
