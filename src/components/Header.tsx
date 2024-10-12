import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { CSSTransition } from 'react-transition-group';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="bg-gray-800 text-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-400">
          Logo
        </a>
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-6">
            <li><a href="/" className="hover:text-blue-400 transition-colors">Home page</a></li>
            <li><a href="/proving-islam" className="hover:text-blue-400 transition-colors">Proving Islam</a></li>
            <li><a href="/other-religions" className="hover:text-blue-400 transition-colors">Other religions and ideologies</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
          </ul>
        </nav>
        <div className="relative" ref={searchRef}>
          <button onClick={toggleSearch} className="text-gray-100 hover:text-blue-400 transition-colors">
            <Search size={24} />
          </button>
          <CSSTransition
            in={isSearchOpen}
            timeout={300}
            classNames="search"
            unmountOnExit
          >
            <div className="absolute right-0 top-full mt-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="py-2 px-4 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoFocus
              />
            </div>
          </CSSTransition>
        </div>
      </div>
    </header>
  );
};

export default Header;