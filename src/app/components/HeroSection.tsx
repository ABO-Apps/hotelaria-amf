import { motion } from "motion/react";
import { ArrowRight, Globe } from "lucide-react";
import { InteractiveForm } from "./InteractiveForm";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16">
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
                <Globe className="w-4 h-4 text-[#f4d03f]" />
                <span className="text-sm text-white">Formação Internacional</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1a4d2e] leading-tight">
                HOTELARIA AMF
              </h1>
              
              <p className="text-xl md:text-2xl text-[#f4d03f] font-light">
                Domine a arte do Saber Servir.
              </p>
            </div>

            <p className="text-lg text-[#2d5016] leading-relaxed max-w-xl">
              Garanta uma formação com alcance internacional em apenas 2 anos e 
              prepare-se para atuar em um dos setores mais dinâmicos e promissores do mundo.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block"
            >
              <p className="text-2xl md:text-3xl text-[#1a4d2e] font-serif italic">
                Transforme hospitalidade em carreira global.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#1a4d2e] text-[#f4d03f] rounded-lg hover:bg-[#2d5016] transition-colors flex items-center justify-center gap-2 group"
              >
                Conhecer o curso
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#1a4d2e] text-[#1a4d2e] rounded-lg hover:bg-[#1a4d2e] hover:text-[#f4d03f] transition-colors"
              >
                Explorar oportunidades
              </motion.button>
            </div>
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