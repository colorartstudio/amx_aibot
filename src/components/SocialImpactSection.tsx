import React from 'react';
import { Heart, Users, Sparkles, HandHeart } from 'lucide-react';

export const SocialImpactSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-transparent overflow-hidden">
      {/* Subtle organic emerald gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#063D25]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#087A45]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Human Imagery Collage */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Photo 1: Community Support / Solidarity */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-[#087A45]/30 shadow-xl group aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                    alt="Ações sociais e apoio comunitário"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-[#8CFFB2] bg-[#050807]/80 px-2 py-1 rounded backdrop-blur-md border border-[#087A45]/40">
                    AÇÃO SOCIAL & SOLIDARIEDADE
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#087A45]/30 shadow-xl group aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop"
                    alt="Alimentos e auxílio a famílias"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-[#8CFFB2] bg-[#050807]/80 px-2 py-1 rounded backdrop-blur-md border border-[#087A45]/40">
                    DISTRIBUIÇÃO & ALIMENTOS
                  </div>
                </div>
              </div>

              {/* Photo 2: Community Development & Education */}
              <div className="space-y-4 pt-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#087A45]/30 shadow-xl group aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop"
                    alt="Pessoas e comunidades"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-[#8CFFB2] bg-[#050807]/80 px-2 py-1 rounded backdrop-blur-md border border-[#087A45]/40">
                    FAMÍLIAS & COMUNIDADES
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#087A45]/30 shadow-xl group aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop"
                    alt="Projetos comunitários"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-[#8CFFB2] bg-[#050807]/80 px-2 py-1 rounded backdrop-blur-md border border-[#087A45]/40">
                    IMPACTO TRANSFORMADOR
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & 1% Destaque */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#08100C] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase tracking-wider mb-5">
              <HandHeart className="w-3.5 h-3.5 text-[#39FF88]" />
              RESPONSABILIDADE SOCIAL
            </div>

            {/* Title as specified */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 uppercase">
              Investir em pessoas também faz parte da{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] to-[#39FF88]">
                nossa visão.
              </span>
            </h2>

            {/* Text based on material as specified */}
            <p className="text-base sm:text-lg text-[#9AA8A0] leading-relaxed mb-8">
              A AMX busca direcionar parte de sua visão empresarial para iniciativas que contribuam com pessoas e comunidades.
            </p>

            {/* Destaque 1% as specified */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#08100C] to-[#111815] border-2 border-[#00B95A]/40 shadow-[0_0_35px_rgba(0,185,90,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Heart className="w-32 h-32 text-[#39FF88]" />
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#00B95A]/20 border border-[#00B95A] flex items-center justify-center text-[#39FF88]">
                  <Heart className="w-6 h-6 fill-[#39FF88]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8CFFB2] uppercase tracking-wider">
                    COMPROMISSO INSTITUCIONAL
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    1% para comunidades carentes
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#E9F1EC] leading-relaxed mt-3">
                Acreditamos que a prosperidade gerada pela tecnologia só adquire real significado quando impacta vidas e proporciona novas perspectivas para aqueles que mais necessitam.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
