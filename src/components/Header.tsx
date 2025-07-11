
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Kirana Kart</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors duration-200">
              Home
            </a>
            <a href="#payment" className="text-gray-700 hover:text-amber-800 transition-colors duration-200">
              Payment
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors duration-200">
              About Us
            </a>
          </nav>
          
          <Button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
