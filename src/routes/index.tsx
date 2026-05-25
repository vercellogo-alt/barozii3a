import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Lock,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Menu,
  Globe,
  Clock,
  KeyRound,
  Eye,
  Award,
  HandHelping,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";
import rdsLogo from "@/assets/rds-logo.png";
import Header from "../components/Header"
import Footer from "../components/Footer"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RDS — Atualização de Cadastro Institucional" },
      {
        name: "description",
        content:
          "Portal institucional do Instituto Educacional Raphael Di Santo para atualização de cadastro de professores e funcionários.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [step, setStep] = useState<"form" | "loading" | "revealed">("form");
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", cargo: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");
    setTimeout(() => setStep("revealed"), 2800);
  };

  // Fake but stable counter — generated once per page load, never persisted.
  const fakeClickCount = 147;

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-900 antialiased selection:bg-[#0033a0]/15">

      <Header/>

      {/* Hero band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0033a0] via-[#002584] to-[#001a5e] text-white">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #ffc300 0, transparent 40%), radial-gradient(circle at 80% 60%, #ffffff 0, transparent 35%)",
        }} />
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#ffc300] backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" /> Comunicado oficial RDS · 2026
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Atualização de Cadastro Institucional
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            Para manter a integridade dos dados administrativos da instituição, solicitamos
            a confirmação das informações funcionais abaixo.
          </p>
        </div>
        <div className="h-1.5 w-full bg-[#ffc300]" />
      </section>

      {/* Form section */}
      <main id="cadastro" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid items-start gap-10 md:grid-cols-5">
          {/* Side info */}
          <aside className="md:col-span-2 animate-[fadeUp_0.6s_ease-out]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src="https://raphaeldisanto.com.br/wp-content/uploads/2020/05/logo-rds.png" alt="" aria-hidden="true" className="h-12 w-12 object-contain" width={48} height={48} />
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Departamento
                  </div>
                  <div className="text-sm font-bold text-[#0033a0]">Recursos Humanos & TI</div>
                </div>
              </div>

              <h3 className="mt-5 text-base font-bold text-[#0033a0]">Por que estou recebendo este pedido?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Periodicamente, a secretaria do RDS revisa o cadastro funcional de
                todos os professores e colaboradores para garantir comunicação e
                pagamentos sem falhas.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {[
                  "Obrigatório para corpo docente e funcionários ativos",
                  "Processo rápido — leva menos de 2 minutos",
                  "Dados vinculados ao seu perfil interno",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#0033a0]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 rounded-lg bg-[#0033a0]/5 px-3 py-2 text-[11px] text-[#0033a0]">
                <Lock className="h-3.5 w-3.5" />
                Página protegida — Departamento de TI Raphael Di Santo
              </div>
            </div>
          </aside>

          {/* Card */}
          <section className="md:col-span-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#ffc300]/30 via-transparent to-[#0033a0]/20 blur-xl" />
              <div className="relative rounded-2xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_-20px_rgba(0,51,160,0.35)] backdrop-blur-xl md:p-9">
                {/* Yellow accent bar */}
                <div className="absolute left-0 top-0 h-1.5 w-24 rounded-tl-2xl bg-[#ffc300]" />

                {step === "form" && (
                  <form onSubmit={handleSubmit} className="animate-[fadeUp_0.5s_ease-out] space-y-5">
                    <div>
                      <h2 className="text-xl font-extrabold text-[#0033a0]">
                        Confirmação de dados funcionais
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        Preencha os campos abaixo com atenção.
                      </p>
                    </div>

                    {[
                      { id: "nome", label: "Nome completo", type: "text", placeholder: "Ex.: Maria Aparecida Silva" },
                      { id: "email", label: "E-mail institucional", type: "email", placeholder: "nome@raphaeldisanto.com.br" },  
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          value={form[f.id as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0033a0] focus:ring-2 focus:ring-[#0033a0]/20"
                        />
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-full bg-[#ffc300] px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#0033a0] shadow-lg shadow-[#ffc300]/40 transition-all hover:-translate-y-0.5 hover:bg-[#ffcf2b] hover:shadow-xl active:translate-y-0"
                    >
                      <span className="relative z-10">Atualizar Dados</span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </button>

                    <p className="pt-1 text-center text-[11px] text-slate-400">
                      Ao continuar, você confirma que as informações fornecidas são verdadeiras.
                    </p>
                  </form>
                )}

                {step === "loading" && (
                  <div className="flex flex-col items-center justify-center gap-5 py-20 animate-[fadeUp_0.4s_ease-out]">
                    <div className="relative h-14 w-14">
                      <div className="absolute inset-0 rounded-full border-2 border-slate-200" />
                      <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#0033a0] border-r-[#ffc300]" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-[#0033a0]">Verificando dados…</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Validando informações junto ao sistema interno do RDS.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer/>

      {/* Full-screen educational reveal */}
      {step === "revealed" && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-50 animate-[fadeIn_0.5s_ease-out]">
          {/* Top alert band */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0033a0] via-[#002584] to-[#001a5e] text-white">
            <div className="absolute inset-0 opacity-25" style={{
              backgroundImage:
                "radial-gradient(circle at 15% 30%, #ffc300 0, transparent 35%), radial-gradient(circle at 85% 70%, #ffffff 0, transparent 30%)",
            }} />
            <div className="relative mx-auto max-w-5xl px-6 py-12 text-center md:py-16">
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#ffc300] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0033a0] animate-[fadeUp_0.6s_ease-out]">
                <AlertTriangle className="h-3.5 w-3.5" />
                Alerta de conscientização
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl animate-[fadeUp_0.8s_ease-out]">
                TUDO ISSO ERA UMA SIMULAÇÃO
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base animate-[fadeUp_1s_ease-out]">
                Você acabou de participar de um teste de engenharia social e phishing
                educacional. Sites aparentemente legítimos podem ser utilizados para
                manipular utilizadores e recolher informações sensíveis.
              </p>
            </div>
            <div className="h-1.5 w-full bg-[#ffc300]" />
          </div>

          {/* Body */}
          <div className="mx-auto max-w-5xl space-y-12 px-6 py-12 md:py-16">
            {/* Humanized card + stat */}
            <section className="grid gap-6 md:grid-cols-5 animate-[fadeUp_0.6s_ease-out]">
              <div className="relative md:col-span-3">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#ffc300]/30 via-transparent to-[#0033a0]/20 blur-xl" />
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
                  <div className="absolute left-0 top-0 h-1.5 w-24 rounded-tl-2xl bg-[#ffc300]" />
                  <div className="mb-3 inline-flex items-center gap-2 text-[#0033a0]">
                    <Heart className="h-5 w-5" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Mensagem para você</span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#0033a0] md:text-3xl">
                    Você não foi o único.
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                    <p>
                      Fique tranquilo. Diversas pessoas também participaram desta simulação
                      e acabaram confiando no site.
                    </p>
                    <p>
                      Ataques de engenharia social exploram emoções humanas como urgência,
                      confiança, autoridade e distração — qualquer pessoa pode ser enganada
                      em momentos de pressão ou rotina.
                    </p>
                    <p className="font-semibold text-[#0033a0]">
                      O importante não é nunca errar. O importante é reconhecer os sinais
                      e aprender a se proteger na próxima vez.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0033a0] to-[#001a5e] p-7 text-white shadow-lg md:p-8">
                  <div className="absolute -right-6 -top-6 opacity-10">
                    <Users className="h-32 w-32" />
                  </div>
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ffc300] backdrop-blur">
                      <Users className="h-3.5 w-3.5" />
                      Estatística da campanha
                    </div>
                    <div className="mt-6 text-6xl font-extrabold tracking-tight text-[#ffc300] md:text-7xl">
                      {fakeClickCount}
                    </div>
                    <p className="mt-2 text-sm text-white/85">
                      pessoas já clicaram nesta simulação.
                    </p>
                    <p className="mt-4 text-[11px] text-white/60">
                      Você faz parte de uma comunidade que está aprendendo junto.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Protection steps */}
            <section className="animate-[fadeUp_0.7s_ease-out]">
              <div className="mb-8 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#0033a0]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0033a0]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Treinamento rápido
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#0033a0] md:text-3xl">
                    Como se proteger de sites maliciosos
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-slate-600">
                    Seis hábitos simples que reduzem drasticamente o risco de cair em
                    golpes de phishing e engenharia social.
                  </p>
                </div>
              </div>

              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Globe, title: "Verifique o domínio", text: "Sites falsos costumam usar endereços parecidos com os originais." },
                  { icon: Clock, title: "Desconfie de urgência", text: "Mensagens como “última chance” ou “ação imediata necessária” tentam reduzir sua atenção." },
                  { icon: KeyRound, title: "Nunca forneça dados sem confirmação", text: "Confirme pedidos diretamente com a instituição." },
                  { icon: Eye, title: "Analise o visual com cuidado", text: "Sites clonados podem parecer extremamente profissionais." },
                  { icon: Award, title: "Verifique HTTPS e certificados", text: "Nem todo cadeado significa segurança absoluta." },
                  { icon: HandHelping, title: "Em caso de dúvida, não clique", text: "A melhor defesa ainda é parar e verificar." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.title}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#0033a0]/30 hover:shadow-lg"
                    >
                      <div className="absolute right-4 top-4 text-5xl font-extrabold text-slate-100 transition group-hover:text-[#ffc300]/40">
                        0{i + 1}
                      </div>
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0033a0]/5 text-[#0033a0] transition group-hover:bg-[#0033a0] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-bold text-[#0033a0]">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Closing band */}
            <section className="relative overflow-hidden rounded-2xl border border-[#ffc300]/30 bg-gradient-to-br from-white to-[#ffc300]/10 p-8 text-center md:p-10 animate-[fadeUp_0.8s_ease-out]">
              <ShieldCheck className="mx-auto h-10 w-10 text-[#0033a0]" />
              <p className="mt-4 text-lg font-extrabold tracking-tight text-[#0033a0] md:text-xl">
                Conscientização salva dados.
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Projeto acadêmico — Operação Escudo Humano
              </p>
              <button
                onClick={() => {
                  setStep("form");
                  setForm({ nome: "", email: "", telefone: "", cargo: "" });
                }}
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#0033a0] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#002584] hover:shadow-lg"
              >
                Entendi, voltar ao início
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </section>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.92); } 100% { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}
