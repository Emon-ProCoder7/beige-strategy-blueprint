
import React from 'react';
import VoteButton from './VoteButton';

const AutomationCard = ({ title, description, integrations }) => {
  return (
    <div className="bg-brand-white rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105">
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div
          className="text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {integrations && (
          <p className="text-sm text-gray-500">
            <strong>Integrations:</strong> {integrations}
          </p>
        )}
      </div>
      <div className="mt-6">
        <VoteButton />
      </div>
    </div>
  );
};

export default AutomationCard;
