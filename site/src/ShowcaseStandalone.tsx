import React from 'react';
import { MobileBankingShowcase } from './components/showcase/MobileBankingShowcase';
import { SaasDashboardShowcase } from './components/showcase/SaasDashboardShowcase';
import { EcommerceShowcase } from './components/showcase/EcommerceShowcase';
import { HealthcareShowcase } from './components/showcase/HealthcareShowcase';
import { DeveloperWorkspaceShowcase } from './components/showcase/DeveloperWorkspaceShowcase';
import { ResponsiveWebsiteShowcase } from './components/showcase/ResponsiveWebsiteShowcase';
import { BeforeAfterRedesignShowcase } from './components/showcase/BeforeAfterRedesignShowcase';
import { ResponsiveComparisonShowcase } from './components/showcase/ResponsiveComparisonShowcase';

export const ShowcaseStandalone: React.FC<{ view: string }> = ({ view }) => {
  return (
    <div className="min-h-screen bg-slate-950 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {view === 'banking' && <MobileBankingShowcase isEmbedded={false} />}
        {view === 'saas' && <SaasDashboardShowcase isEmbedded={false} />}
        {view === 'ecommerce' && <EcommerceShowcase isEmbedded={false} />}
        {view === 'healthcare' && <HealthcareShowcase isEmbedded={false} />}
        {view === 'developer' && <DeveloperWorkspaceShowcase isEmbedded={false} />}
        {view === 'website' && <ResponsiveWebsiteShowcase isEmbedded={false} />}
        {view === 'before-after' && <BeforeAfterRedesignShowcase isEmbedded={false} />}
        {view === 'responsive' && <ResponsiveComparisonShowcase isEmbedded={false} />}
      </div>
    </div>
  );
};
