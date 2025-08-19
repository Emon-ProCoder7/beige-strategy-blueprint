export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Beige Corporation | Internal Use Only
        </p>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>Md Tabassum Hossain Emon • Business Process Automation</p>
          <p className="mt-1">
            Portfolio: <span className="text-foreground">md-tabassum-hossain-emon.netlify.app</span> | 
            Contact: <span className="text-foreground">[email protected]</span>
          </p>
        </div>
      </div>
    </footer>
  );
};