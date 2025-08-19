import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';

interface PasswordDialogProps {
  open: boolean;
  onAuthenticate: (success: boolean) => void;
}

export const PasswordDialog = ({ open, onAuthenticate }: PasswordDialogProps) => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate slight delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (password === '1234567') {
      toast.success('Access granted!');
      onAuthenticate(true);
    } else {
      toast.error('Incorrect password');
      setPassword('');
    }
    
    setLoading(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <Lock className="h-6 w-6 text-primary-foreground" />
          </div>
          <DialogTitle className="text-xl font-bold text-card-foreground">
            Access Required
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter the password to interact with automation proposals
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-center text-lg tracking-widest bg-input border-border"
            autoFocus
          />
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading || !password}
          >
            {loading ? 'Verifying...' : 'Access Blueprint'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};