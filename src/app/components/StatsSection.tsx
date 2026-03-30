import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Clock, GraduationCap, TrendingUp, Globe2 } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

function ValueDisplay({ value }: { value: string }) {
  const numericMatch = value.match(/^(\d+)(.*)$/);

  if (numericMatch) {
    const [, number, suffix] = numericMatch;

    return (
      <span className="inline-flex items-baseline justify-center gap-1">
        <span className="font-sans font-semibold tracking-tight tabular-nums">
          {number}
        </span>
        {suffix ? (
          <span className="font-sans font-medium text-[0.9em]">
            {suffix}
          </span>
        ) : null}
      </span>
    );
  }

  return (
    <span className="font-sans font-semibold tracking-tight">
      {value}
    </span>
  );
}

function StatCard({ value, label, description, icon: Icon, delay }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView && value.includes("%")) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start) + "%");
        }
      }, 16);

      return () => clearInterval(timer);
    } else if (isInView) {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="relative group"
    >
      <div className="bg-white/75 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#1a4d2e]/12 hover:border-[#d8aa2b] h-full flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="mb-6 bg-gradient-to-br from-[#1a4d2e] to-[#2d5016] p-4 rounded-2xl"
        >
          <Icon className="w-8 h-8 text-[#d8aa2b]" />
        </motion.div>

        <motion.div
          className="text-5xl md:text-6xl lg:text-7xl text-[#1a4d2e] mb-3"
          initial={{ scale: 0.5 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {isInView ? <ValueDisplay value={displayValue} /> : <ValueDisplay value="0" />}
        </motion.div>

        <div className="text-xl md:text-2xl text-[#1a4d2e] font-serif mb-3">
          {label}
        </div>

        <p className="text-[#2d5016] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    {
      value: "2",
      label: "anos",
      description: "Para formação completa",
      icon: Clock,
      delay: 0,
    },
    {
      value: "1825h",
      label: "horas",
      description: "De formação profissional",
      icon: GraduationCap,
      delay: 0.2,
    },
    {
      value: "100%",
      label: "prática",
      description: "Experiência prática",
      icon: TrendingUp,
      delay: 0.4,
    },
    {
      value: "Global",
      label: "alcance",
      description: "Mercado internacional",
      icon: Globe2,
      delay: 0.6,
    },
  ];

  return (
    <section
      id="oportunidades"
      className="relative py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent via-white/30 to-transparent overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#d8aa2b]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1a4d2e]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a4d2e]">
            Oportunidades de Carreira
          </h2>
          <p className="text-lg md:text-xl text-[#2d5016] max-w-3xl mx-auto">
            Uma formação completa que abre portas para o mundo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1a4d2e] italic">
              "A excelência na hospitalidade começa aqui"
            </p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#d8aa2b] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
