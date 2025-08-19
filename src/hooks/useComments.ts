import { useState, useEffect } from 'react';

interface Comment {
  id: string;
  content: string;
  created_at: string;
}

export const useComments = (automationTitle: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  
  const storageKey = `comments-${automationTitle}`;

  useEffect(() => {
    // Load from localStorage
    const savedComments = localStorage.getItem(storageKey);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [storageKey]);

  const addComment = async (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      content,
      created_at: new Date().toISOString(),
    };
    
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    
    // Save to localStorage
    localStorage.setItem(storageKey, JSON.stringify(updatedComments));
  };

  return { comments, addComment };
};