import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowUp, MessageCircle, Lock } from 'lucide-react';
import { CommentsModal } from './CommentsModal';
import { useVotes } from '@/hooks/useVotes';
import { useComments } from '@/hooks/useComments';
import { toast } from 'sonner';

interface Automation {
  title: string;
  description: string;
  integrations: string[];
}

interface AutomationCardProps {
  automation: Automation;
  isAuthenticated: boolean;
}

export const AutomationCard = ({ automation, isAuthenticated }: AutomationCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const { votes, hasVoted, toggleVote } = useVotes(automation.title);
  const { comments, addComment } = useComments(automation.title);

  const handleVote = () => {
    if (!isAuthenticated) {
      toast.error('Password required for voting');
      return;
    }
    toggleVote();
  };

  const handleComment = () => {
    if (!isAuthenticated) {
      toast.error('Password required for commenting');
      return;
    }
    setShowComments(true);
  };

  return (
    <>
      <Card className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-card-foreground leading-tight">
            {automation.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {automation.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {automation.integrations.map((integration, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {integration}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between items-center pt-4 border-t border-border">
          <Button
            variant={hasVoted ? "default" : "outline"}
            size="sm"
            onClick={handleVote}
            className="flex items-center space-x-2"
          >
            {!isAuthenticated && <Lock className="h-3 w-3" />}
            <ArrowUp className="h-4 w-4" />
            <span>{votes}</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleComment}
            className="flex items-center space-x-2"
          >
            {!isAuthenticated && <Lock className="h-3 w-3" />}
            <MessageCircle className="h-4 w-4" />
            <span>{comments.length}</span>
          </Button>
        </CardFooter>
      </Card>

      <CommentsModal
        automation={automation}
        open={showComments}
        onOpenChange={setShowComments}
        comments={comments}
        onAddComment={addComment}
      />
    </>
  );
};