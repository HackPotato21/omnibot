// Fix: Provide a complete implementation for the Header component.
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">OmniBot</h1>
      </div>
    </header>
  );
};

export default Header;
