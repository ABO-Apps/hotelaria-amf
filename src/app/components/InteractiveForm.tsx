import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Mail, MapPin, Phone, ShieldCheck, User } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  estado: string;
  cidade: string;
}

const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export function InteractiveForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      const webhookUrl = import.meta.env.VITE_GSHEETS_WEBHOOK_URL?.trim();
      const token = import.meta.env.VITE_GSHEETS_TOKEN?.trim();
      const sheetName = import.meta.env.VITE_SHEET_NAME?.trim() || "Leads Podcasts";

      if (!webhookUrl || !token) {
        const missingVars = [
          !webhookUrl ? "VITE_GSHEETS_WEBHOOK_URL" : null,
          !token ? "VITE_GSHEETS_TOKEN" : null,
        ]
          .filter(Boolean)
          .join(", ");
        throw new Error(`Configuração ausente: ${missingVars}.`);
      }

      const payload = new URLSearchParams({
        token,
        sheet_name: sheetName,
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        estado: formData.estado,
        cidade: formData.cidade,
        submittedAt: new Date().toISOString(),
      });
      const payloadString = payload.toString();

      await fetch(`${webhookUrl}?${payloadString}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payloadString,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-br from-white to-[#d8aa2b]/10 rounded-[32px] p-8 md:p-12 shadow-2xl border-2 border-[#d8aa2b]"
      >
        <div className="flex flex-col items-center text-center space-y-5">
          <div className="bg-[#1a4d2e] rounded-full p-5">
            <CheckCircle2 className="w-12 h-12 text-[#d8aa2b]" />
          </div>
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-serif text-[#1a4d2e]">
              Obrigado, {formData.nome.split(" ")[0]}.
            </h3>
            <p className="text-lg text-[#2d5016]">
              Recebemos seus dados e em breve a equipe entrará em contato com mais
              informações sobre o curso.
            </p>
          </div>
          <p className="text-sm text-[#2d5016]/70">
            Tecnólogo em Hotelaria da Antonio Meneghetti Faculdade.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative bg-white/95 backdrop-blur-sm rounded-[32px] p-8 md:p-10 shadow-2xl border-2 border-[#1a4d2e]/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d8aa2b]/7 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1a4d2e]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 space-y-3 relative"
      >
        <h3 className="text-3xl md:text-4xl font-serif text-[#1a4d2e]">Receba mais informações</h3>
        <p className="text-[#2d5016]">
          Preencha seus dados para saber mais sobre o tecnólogo em Hotelaria da
          Antonio Meneghetti Faculdade.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-5 relative">
        <div className="grid gap-5">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#1a4d2e]">Nome</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2d5016]/50" />
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={(e) => updateFormData("nome", e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-white border-2 border-[#1a4d2e]/20 rounded-2xl focus:border-[#b8860b] focus:outline-none transition-all text-[#1a4d2e] placeholder:text-[#2d5016]/40 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#1a4d2e]">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2d5016]/50" />
              <input
                type="email"
                placeholder="voce@email.com"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-white border-2 border-[#1a4d2e]/20 rounded-2xl focus:border-[#b8860b] focus:outline-none transition-all text-[#1a4d2e] placeholder:text-[#2d5016]/40 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#1a4d2e]">Telefone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2d5016]/50" />
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={(e) => updateFormData("telefone", e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-white border-2 border-[#1a4d2e]/20 rounded-2xl focus:border-[#b8860b] focus:outline-none transition-all text-[#1a4d2e] placeholder:text-[#2d5016]/40 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#1a4d2e]">Estado</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2d5016]/50" />
                <select
                  value={formData.estado}
                  onChange={(e) => updateFormData("estado", e.target.value)}
                  className={`w-full pl-14 pr-4 py-4 bg-white border-2 border-[#1a4d2e]/20 rounded-2xl focus:border-[#b8860b] focus:outline-none transition-all shadow-sm appearance-none ${
                    formData.estado ? "text-[#1a4d2e]" : "text-[#2d5016]/40"
                  }`}
                  required
                >
                  <option value="">Selecione</option>
                  {estados.map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#1a4d2e]">Cidade</label>
              <input
                type="text"
                placeholder="Sua cidade"
                value={formData.cidade}
                onChange={(e) => updateFormData("cidade", e.target.value)}
                className="w-full px-4 py-4 bg-white border-2 border-[#1a4d2e]/20 rounded-2xl focus:border-[#b8860b] focus:outline-none transition-all text-[#1a4d2e] placeholder:text-[#2d5016]/40 shadow-sm"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full mt-6 px-8 py-5 rounded-2xl transition-all duration-300 text-lg font-semibold ${
            isFormValid && !isSubmitting
              ? "bg-[#1a4d2e] text-[#d8aa2b] hover:bg-[#2d5016] cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>

        <div className="text-center pt-2">
          <p className="text-sm text-[#2d5016]/70 inline-flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#b8860b]" />
            Seus dados são usados apenas para retorno de contato.
          </p>
        </div>
      </form>
    </div>
  );
}
