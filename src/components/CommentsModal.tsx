import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback } from './ui/avatar';
import { formatDistanceToNow } from 'date-fns';

interface Comment {
  id: string;
  content: string;
  created_at: string;
}

interface Automation {
  title: string;
  description: string;
  integrations: string[];
}

interface CommentsModalProps {
  automation: Automation;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  comments: Comment[];
  onAddComment: (content: string) => void;
}

export const CommentsModal = ({ 
  automation, 
  open, 
  onOpenChange, 
  comments, 
  onAddComment 
}: CommentsModalProps) => {
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setSubmitting(true);
    await onAddComment(newComment.trim());
    setNewComment('');
    setSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-card border-border max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-card-foreground pr-6">
            {automation.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 flex flex-col space-y-4 min-h-0">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {comments.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No comments yet. Be the first to share your thoughts!
                </p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3 p-4 bg-muted/30 rounded-lg">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        U
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium text-card-foreground">Team Member</span>
                        <span className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
                        </span>
                      </div>
                      <p className="text-sm text-card-foreground leading-relaxed">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
          
          <form onSubmit={handleSubmit} className="space-y-3 border-t border-border pt-4">
            <Textarea
              placeholder="Share your thoughts on this automation..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[80px] bg-input border-border resize-none"
            />
            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={!newComment.trim() || submitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {submitting ? 'Posting...' : 'Add Comment'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};