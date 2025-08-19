import { useEffect } from 'react';

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}

export const SplineBackground = () => {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 opacity-30">
      <spline-viewer 
        url="https://prod.spline.design/MSZFXsEO1rUG2Dzs/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};