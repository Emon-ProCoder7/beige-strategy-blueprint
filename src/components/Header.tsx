export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/beige_logo.png" alt="Beige Corporation Logo" className="w-8 h-8" />
          <span className="text-sm font-medium text-muted-foreground">Beige Corporation</span>
        </div>
        
        <h1 className="text-xl font-bold text-foreground hidden md:block">
          The Strategic Automation Blueprint
        </h1>
        
        <div className="w-32" /> {/* Spacer for balance */}
      </div>
    </header>
  );
};