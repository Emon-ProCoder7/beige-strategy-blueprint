
import React from 'react';

const VoteButton = () => {
  const [voted, setVoted] = React.useState(false);

  const handleVote = () => {
    setVoted(true);
  };

  return (
    <button
      onClick={handleVote}
      disabled={voted}
      className={`w-full py-2 px-4 rounded-lg transition-colors ${
        voted
          ? 'bg-green-500 text-white'
          : 'bg-brand-black text-brand-white hover:bg-beige-dark hover:text-brand-black'
      }`}
    >
      {voted ? 'Voted!' : 'Vote for this Workflow'}
    </button>
  );
};

export default VoteButton;
