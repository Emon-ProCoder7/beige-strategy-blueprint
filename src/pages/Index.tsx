import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AutomationSection } from '@/components/AutomationSection';
import { Footer } from '@/components/Footer';
import { PasswordDialog } from '@/components/PasswordDialog';
import { SplineBackground } from '@/components/SplineBackground';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user already authenticated in session
  useEffect(() => {
    const authenticated = sessionStorage.getItem('beige-authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthentication = (success: boolean) => {
    setIsAuthenticated(success);
    if (success) {
      sessionStorage.setItem('beige-authenticated', 'true');
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <SplineBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AutomationSection isAuthenticated={isAuthenticated} />
        <Footer />
      </div>
      <PasswordDialog 
        open={!isAuthenticated} 
        onAuthenticate={handleAuthentication} 
      />
    </div>
  );
};

export default Index;