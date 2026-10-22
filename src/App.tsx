import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { HowItWorksSection } from './components/HowItWorksSection.tsx';
import { Trading247Section } from './components/Trading247Section.tsx';
import { CustodySection } from './components/CustodySection.tsx';
import { WithdrawalRulesSection } from './components/WithdrawalRulesSection.tsx';
import { BonusesSection } from './components/BonusesSection.tsx';
import { LeadershipSection } from './components/LeadershipSection.tsx';
import { PillarsSection } from './components/PillarsSection.tsx';
import { SocialImpactSection } from './components/SocialImpactSection.tsx';
import { FounderSection } from './components/FounderSection.tsx';
import { DiversificationSection } from './components/DiversificationSection.tsx';
import { CtaSection } from './components/CtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { TermsModal } from './components/Modals.tsx';
import { BackofficeApp } from './components/backoffice/BackofficeApp.tsx';
import { BackofficeAuthModal } from './components/backoffice/BackofficeAuthModal.tsx';
import { BlurredTradingBackground } from './components/BlurredTradingBackground.tsx';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'landing' | 'backoffice'>('landing');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState<boolean>(false);
  const [termsModalTab, setTermsModalTab] = useState<'terms' | 'privacy' | 'risk'>('terms');

  // Prevent scroll during initial brief loading screen
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTermsModal = (tab: 'terms' | 'privacy' | 'risk') => {
    setTermsModalTab(tab);
    setIsTermsModalOpen(true);
  };

  const handleOpenAccessPlatform = () => {
    setIsAuthModalOpen(true);
  };

  const handleEnterBackoffice = () => {
    setIsAuthModalOpen(false);
    setViewMode('backoffice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitBackoffice = () => {
    setViewMode('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in Backoffice Mode, render the full interactive Backoffice application
  if (viewMode === 'backoffice') {
    return <BackofficeApp onExit={handleExitBackoffice} />;
  }

  // Institutional Landing Page View
  return (
    <div className="relative min-h-screen bg-[#050807] text-white selection:bg-[#00B95A]/30 selection:text-[#39FF88] overflow-x-hidden">
      {/* Animated Obfuscated Candlestick / Trading Background */}
      <BlurredTradingBackground variant="landing" />

      {/* Initial High-Tech Loading Screen */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {/* Main Header */}
      <Header onOpenPlatformModal={handleOpenAccessPlatform} />

      {/* Main Content Area */}
      <main className="relative">
        {/* Hero Section */}
        <Hero
          onExploreTechnology={() => scrollToSection('tecnologia')}
          onExploreHowItWorks={() => scrollToSection('como-funciona')}
          onOpenPlatformModal={handleOpenAccessPlatform}
        />

        {/* Section 8: O que é a AMX AIBOT */}
        <AboutSection />

        {/* Section 9: Como Funciona a Tecnologia AIBOT */}
        <HowItWorksSection />

        {/* Section 10: Operação 24/7 */}
        <Trading247Section />

        {/* Section 11: Custódia Bot Executivo */}
        <CustodySection />

        {/* Section 12: Regras de Resgate e Saque */}
        <WithdrawalRulesSection />

        {/* Section 13: Bonificações */}
        <BonusesSection />

        {/* Section 14: Liderança */}
        <LeadershipSection />

        {/* Section 15: Pilares de Sustentabilidade Empresarial AMX */}
        <PillarsSection />

        {/* Section 16: Impacto Social */}
        <SocialImpactSection />

        {/* Section 17: Visão do Fundador */}
        <FounderSection />

        {/* Section 18: Diversificação */}
        <DiversificationSection />

        {/* Section 19: CTA Final */}
        <CtaSection
          onOpenPlatformModal={handleOpenAccessPlatform}
          onOpenContactModal={handleOpenAccessPlatform}
        />
      </main>

      {/* Section 20 & 21: Footer & Aviso de Risco */}
      <Footer
        onOpenTermsModal={handleOpenTermsModal}
        onOpenContactModal={handleOpenAccessPlatform}
      />

      {/* Backoffice Access Modal */}
      <BackofficeAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onEnterBackoffice={handleEnterBackoffice}
      />

      {/* Compliance Terms Modal */}
      <TermsModal
        isOpen={isTermsModalOpen}
        activeTab={termsModalTab}
        onClose={() => setIsTermsModalOpen(false)}
        onTabChange={setTermsModalTab}
      />
    </div>
  );
}
