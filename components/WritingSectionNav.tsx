import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ArticleNavProps {
  title?: string;
  author?: string;
  onClose?: () => void;
}

const ArticleNav: React.FC<ArticleNavProps> = ({
  title = "Don't trust the (design) process: Manya Gureja",
  author = "Manya Gureja",
  onClose
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out`}
    >
      <div
        className={`relative px-4 lg:px-8 py-4 lg:py-6 flex items-center justify-between ${
          isScrolled ? 'bg-transparent' : 'bg-transparent'
        }`}
      >
        {/* Left: Close Button */}
        <button
          onClick={onClose}
          className={`transition-colors duration-300 ml-8 ${
            isScrolled
              ? 'text-gray-600 hover:text-gray-800'
              : 'text-white/80 hover:text-white'
          }`}
        >
          <X size={32} />
        </button>

        {/* Center */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 flex items-center transition-all duration-500`}
        >
          <span
            className={`inline-block px-8 py-8 rounded-full text-md font-medium whitespace-nowrap transition-all duration-300 ${
              isScrolled
                ? 'bg-rose-400/20 backdrop-blur-lg shadow-sm text-gray-900'
                : 'bg-rose-300/80 text-white'
            }`}
          >
            Articles
          </span>

          {/* Title - only visible before scroll */}
          {!isScrolled && (
            <span
              className={`ml-4 truncate max-w-md lg:max-w-2xl transition-opacity duration-500 text-lg ${
                isScrolled ? 'opacity-0' : 'opacity-100'
              } ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {title}
            </span>
          )}
        </div>

        {/* Right side spacer */}
        <div className="w-6" />
      </div>
    </nav>
  );
};

export default ArticleNav;