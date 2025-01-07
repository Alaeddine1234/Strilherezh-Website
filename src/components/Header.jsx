import React, { useState } from 'react';
import { Menu, ShoppingBasket, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-900"
            >
              <Menu className="h-5 w-5 text-[#505050]" />
              <span className="text-sm text-[#505050]">Menu</span>
            </button>

            {/* Center: Logo */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <ShoppingBasket className="h-8 w-8 sm:h-10 sm:w-10 text-[#E0AA3E]" />
                <h1 className="text-sm sm:text-base font-semibold text-[#E0AA3E]">
                  STRILHEREZH
                </h1>
              </div>
            </div>

            {/* Right: Account and Cart */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="flex items-center space-x-2 text-[#505050] hover:text-[#AAAAAA]"
              >
                <User className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="hidden lg:block text-sm">Compte</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-[#505050] hover:text-[#AAAAAA]"
              >
                <ShoppingBasket className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="hidden lg:block text-sm">Panier</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Golden banner */}
      <div className="bg-[#E0AA3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between h-12">
            {/* Left: Banner logo */}
            <div className="flex items-center space-x-2">
              <ShoppingBasket className="h-5 w-5 text-white" />
              <span className="text-white font-medium text-sm sm:text-base">
                STRILHEREZH
              </span>
            </div>
            {/* Right: Navigation links */}
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-white hover:text-[#E3E3E3] text-sm font-medium">
                Tous nos produits
              </a>
              <a href="#" className="text-white hover:text-[#E3E3E3] text-sm font-medium">
                Notre histoire
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:hidden bg-white border-b`}
      >
        <div className="px-4 py-2 space-y-1">
          <a
            href="#"
            className="block py-2 text-sm text-[#505050] hover:text-[#AAAAAA]"
          >
            Tous nos produits
          </a>
          <a
            href="#"
            className="block py-2 text-sm text-[#505050] hover:text-[#AAAAAA]"
          >
            Notre histoire
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
