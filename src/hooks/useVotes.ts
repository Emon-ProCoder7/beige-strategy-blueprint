import { useState, useEffect } from 'react';

export const useVotes = (automationTitle: string) => {
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const storageKey = `vote-${automationTitle}`;
  const countKey = `count-${automationTitle}`;

  useEffect(() => {
    // Load from localStorage
    const userVote = localStorage.getItem(storageKey);
    const savedCount = localStorage.getItem(countKey);
    
    setHasVoted(userVote === 'true');
    setVotes(savedCount ? parseInt(savedCount) : Math.floor(Math.random() * 20) + 5); // Random initial votes
  }, [storageKey, countKey]);

  const toggleVote = () => {
    const newVotedState = !hasVoted;
    const newVoteCount = newVotedState ? votes + 1 : votes - 1;
    
    setHasVoted(newVotedState);
    setVotes(newVoteCount);
    
    // Save to localStorage
    localStorage.setItem(storageKey, newVotedState.toString());
    localStorage.setItem(countKey, newVoteCount.toString());
  };

  return { votes, hasVoted, toggleVote };
};