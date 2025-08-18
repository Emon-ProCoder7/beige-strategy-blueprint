
import React from 'react';

const Header = () => {
  return (
    <header className="bg-brand-black text-brand-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Beige Corporation</h1>
        <nav>
          <a href="#" className="text-lg hover:text-beige-dark">
            Workflows
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
