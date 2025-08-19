import { AutomationCard } from './AutomationCard';
import { automationData } from '@/data/automationData';

interface AutomationSectionProps {
  isAuthenticated: boolean;
}

export const AutomationSection = ({ isAuthenticated }: AutomationSectionProps) => {
  return (
    <main className="container mx-auto px-4 py-12">
      {automationData.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.automations.map((automation, index) => (
              <AutomationCard 
                key={`${sectionIndex}-${index}`}
                automation={automation}
                isAuthenticated={isAuthenticated}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};