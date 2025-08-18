
import React from 'react';
import Header from '../components/Header';
import AutomationCard from '../components/AutomationCard';
import SplineBackground from '../components/SplineBackground';
import { workflows } from '../lib/workflows';

const Home = () => {
  return (
    <div className="min-h-screen bg-beige text-brand-black">
      <SplineBackground />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-4">
          Beige Business Process Automation Services
        </h1>
        <h2 className="text-2xl text-center mb-12">
          The Strategic Automation Blueprint: An Executive Brief for The Beige Corporation
        </h2>

        {workflows.map((categoryData, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-4xl font-bold mb-8 border-b-2 border-brand-black pb-2">
              {categoryData.category}
            </h3>
            {categoryData.subcategories.map((subcategory, subIndex) => (
              <div key={subIndex} className="mb-8">
                <h4 className="text-3xl font-semibold mb-6">
                  {subcategory.title}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {subcategory.workflows.map((workflow, workflowIndex) => (
                    <AutomationCard
                      key={workflowIndex}
                      title={subcategory.title}
                      description={workflow.description}
                      integrations={workflow.integrations}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
