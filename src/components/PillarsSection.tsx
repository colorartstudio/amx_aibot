import React from 'react';
import { Headphones, TrendingUp, HeartHandshake, Zap, Leaf } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      title: 'SUPORTE 24/7',
      subtitle: 'Atendimento especializado disponível o tempo todo',
      icon: Headphones,
      detail: 'Equipe pronta para esclarecer dúvidas operacionais e orientar o uso da tecnologia.',
    },
    {
      title: 'PROSPECÇÃO CONTÍNUA',
      subtitle: 'Captação constante de novos negócios e parcerias',
      icon: TrendingUp,
      detail: 'Expansão estratégica e fortalecimento do ecossistema institucional.',
    },
    {
      title: 'RETENÇÃO',
      subtitle: 'Engajamento e relacionamento de longo prazo',
      icon: HeartHandshake,
      detail: 'Foco na confiança, transparência e satisfação permanente dos parceiros.',
    },
    {
      title: 'PAGAMENTO',
      subtitle: 'Transações rápidas, seguras e pontuais via PIX',
      icon: Zap,
      detail: 'Liquidação pontual diretamente na conta bancária de titularidade do usuário.',
    },
  ];

  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-[#08100C] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#063D25]/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header as specified */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111815] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase tracking-wider mb-4">
            <Leaf className="w-3.5 h-3.5 text-[#00B95A]" />
            GOVERNANÇA CORPORATIVA
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Pilares de Sustentabilidade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] to-[#39FF88]">
              Empresarial AMX
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8A0]">
            Fundamentos estruturantes que garantem solidez, atendimento de excelência e pontualidade.
          </p>
        </div>

        {/* 4 Cards Grid as specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="amx-card p-6 sm:p-7 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#08100C] border border-[#00B95A]/30 flex items-center justify-center mb-5 group-hover:border-[#39FF88] transition-colors">
                    <Icon className="w-6 h-6 text-[#39FF88]" />
                  </div>

                  <h3 className="text-base font-bold text-white tracking-wide uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#E9F1EC] leading-snug mb-3">
                    "{item.subtitle}"
                  </p>

                  <p className="text-xs text-[#9AA8A0] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#18211D] flex items-center justify-between text-[11px] font-mono text-[#9AA8A0]">
                  <span>PADRÃO AMX</span>
                  <div className="w-2 h-2 rounded-full bg-[#00B95A]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer as specified: Compromisso com o futuro • Sustentabilidade • Inovação • ESG */}
        <div className="text-center p-4 sm:p-5 rounded-2xl bg-[#111815]/90 border border-[#00B95A]/20 max-w-3xl mx-auto">
          <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#39FF88] uppercase">
            Compromisso com o futuro • Sustentabilidade • Inovação • ESG
          </p>
        </div>
      </div>
    </section>
  );
};
