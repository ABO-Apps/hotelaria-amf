import { useState } from "react";
import { motion } from "motion/react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Send,
  Award,
  Globe2
} from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  estado: string;
  cidade: string;
}

export function InteractiveForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const fields = [
    { 
      name: "nome", 
      label: "Nome completo", 
      type: "text", 
      placeholder: "Digite seu nome",
      icon: User 
    },
    { 
      name: "email", 
      label: "E-mail", 
      type: "email", 
      placeholder: "seu@email.com",
      icon: Mail 
    },
    { 
      name: "telefone", 
      label: "WhatsApp", 
      type: "tel", 
      placeholder: "(00) 00000-0000",
      icon: Phone 
    },
    { 
      name: "estado", 
      label: "Estado", 
      type: "text", 
      placeholder: "Ex: RS",
      icon: MapPin 
    },
    { 
      name: "cidade", 
      label: "Cidade", 
      type: "text", 
      placeholder: "Ex: Porto Alegre",
      icon: Globe2 
    },
  ];

  const isFormValid = Object.values(formData).every(value => value.trim() !== "");
  const filledFields = Object.values(formData).filter(value => value.trim() !== "").length;
  const progress = (filledFields / fields.length) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-br from-white to-[#f4d03f]/10 rounded-[32px] p-8 md:p-12 shadow-2xl border-2 border-[#f4d03f]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-[#f4d03f] to-[#1a4d2e] rounded-full blur-xl opacity-50"
            />
            <div className="relative bg-gradient-to-br from-[#1a4d2e] to-[#2d5016] rounded-full p-8">
              <CheckCircle2 className="w-16 h-16 text-[#f4d03f]" />
            </div>
          </div>

          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-serif text-[#1a4d2e]"
            >
              Parabéns, {formData.nome.split(' ')[0]}! 🎉
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#2d5016]"
            >
              Você está a um passo de transformar sua paixão por hospitalidade<br />
              em uma carreira internacional de sucesso!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 w-full max-w-md mt-8"
          >
            {[
              { icon: Award, label: "Formação Premium" },
              { icon: Globe2, label: "Carreira Global" },
              { icon: Sparkles, label: "Experiência Única" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-[#1a4d2e]/10"
              >
                <item.icon className="w-8 h-8 text-[#1a4d2e] mx-auto mb-2" />
                <p className="text-xs text-[#2d5016] leading-tight">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-[#2d5016]/70 pt-4"
          >
            Em breve nossa equipe entrará em contato com você!
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="relative bg-white/95 backdrop-blur-sm rounded-[32px] p-8 md:p-10 shadow-2xl border-2 border-[#1a4d2e]/20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f4d03f]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1a4d2e]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 space-y-4 relative"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1a4d2e] to-[#2d5016] rounded-full mb-2"
        >
          <Sparkles className="w-4 h-4 text-[#f4d03f]" />
          <span className="text-white text-sm font-medium">Inscreva-se agora</span>
        </motion.div>
        
        <h3 className="text-3xl md:text-4xl font-serif text-[#1a4d2e]">
          Comece sua jornada
        </h3>
        <p className="text-[#2d5016]">
          Preencha seus dados e receba mais informações sobre o curso
        </p>

        {/* Progress bar */}
        {filledFields > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4"
          >
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-[#2d5016] font-medium">{Math.round(progress)}% completo</span>
              <span className="text-[#2d5016]/60">{filledFields}/{fields.length} campos</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-[#1a4d2e] to-[#f4d03f]"
              />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 relative">
        {fields.map((field, idx) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative group"
          >
            <label className="block text-sm font-medium text-[#1a4d2e] mb-2 ml-1">
              {field.label}
            </label>
            
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <field.icon 
                  className={`w-5 h-5 transition-colors duration-300 ${
                    focusedField === field.name ? "text-[#f4d03f]" : "text-[#2d5016]/50"
                  }`} 
                />
              </div>
              
              <motion.input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name as keyof FormData]}
                onChange={(e) => updateFormData(field.name, e.target.value)}
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField(null)}
                whileFocus={{ scale: 1.02 }}
                className="w-full pl-14 pr-12 py-4 bg-white border-2 border-[#1a4d2e]/20 rounded-2xl 
                  focus:border-[#f4d03f] focus:outline-none transition-all duration-300
                  text-[#1a4d2e] placeholder:text-[#2d5016]/40
                  shadow-sm hover:shadow-md focus:shadow-lg"
                required
              />
              
              {formData[field.name as keyof FormData] && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: isFormValid ? 1.02 : 1 }}
          whileTap={{ scale: isFormValid ? 0.98 : 1 }}
          disabled={!isFormValid}
          className={`w-full mt-8 px-8 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 text-lg font-semibold ${
            isFormValid
              ? "bg-gradient-to-r from-[#f4d03f] to-[#ffd700] text-[#1a4d2e] shadow-lg hover:shadow-2xl cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <span>Quero conhecer o curso</span>
          {isFormValid && (
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
          )}
        </motion.button>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center pt-4"
        >
          <p className="text-sm text-[#2d5016]/70 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#f4d03f]" />
            Seus dados estão seguros conosco
          </p>
        </motion.div>
      </form>
    </div>
  );
}