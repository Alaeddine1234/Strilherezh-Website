import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Droplet } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Strilherezh",
      links: ["Notre histoire", "Tous nos produits"],
    },
    {
      title: "Skornenn",
      links: ["Histoire de Skornenn", "Cidres naturels", "Cidres de feu", "Cidres de glace"],
    },
    {
      title: "Vins",
      links: ["Histoire de \"Vins\"", "Vins rouges", "Vins blancs", "Vins rosés"],
    },
    {
      title: "Whiskys",
      links: ["Histoire de \"Whisky\"", "Catégorie 1", "Catégorie 2"],
    },
    {
      title: "Exclusivités",
      links: ["Catégorie 1", "Catégorie 2"],
    },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="text-center">
            <Droplet className="h-12 w-12 sm:h-16 sm:w-16 text-[#E0AA3E] mx-auto transform rotate-180" />
            <h2 className="text-xl sm:text-2xl font-semibold text-[#E0AA3E] mt-2">
              STRILHEREZH
            </h2>
            <p className="text-sm sm:text-base text-[#E0AA3E]">Distillerie bretonne</p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {footerLinks.map((column) => (
            <div key={column.title} className="text-center sm:text-left">
              <h3 className="text-sm sm:text-base font-semibold text-[#E0AA3E] tracking-wider uppercase mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#E0AA3E] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
              <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-[#E0AA3E]">
                CGU
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-[#E0AA3E]">
                CGV
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-[#E0AA3E]">
                Politique de confidentialité
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-[#E0AA3E]">
                Mentions légales
              </a>
            </nav>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#E0AA3E]">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E0AA3E]">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E0AA3E]">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E0AA3E]">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            © {currentYear} STRILHEREZH. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
