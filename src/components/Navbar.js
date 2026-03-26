"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Membership", path: "/membership" },
    { name: "Book Trial", path: "/book-trail" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled || isOpen ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black uppercase tracking-tighter z-[110] hover:scale-105 transition-transform">
            FITFAM <span className="text-[#FF6B35]">FITNESS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-[#FF6B35] ${
                  pathname === link.path ? "text-[#FF6B35]" : "text-[#A1A1AA]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side: Join Now & Toggle */}
          <div className="flex items-center gap-6 z-[110]">
            <Link
              href="/membership"
              className="hidden sm:block bg-[#FF6B35] text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform active:scale-95"
            >
              Join Now
            </Link>

            {/* Mobile Toggle (Three Dashes) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col justify-center items-end gap-1.5 group w-10 h-10 p-2"
              aria-label="Toggle Menu"
            >
              <div 
                className={`h-1 bg-white transition-all duration-300 rounded-full ${
                  isOpen ? "w-8 rotate-45 translate-y-2.5 bg-[#FF6B35]" : "w-8"
                }`} 
              />
              <div 
                className={`h-1 bg-white transition-all duration-300 rounded-full w-6 ${
                  isOpen ? "opacity-0" : "opacity-100 group-hover:w-8"
                }`} 
              />
              <div 
                className={`h-1 bg-white transition-all duration-300 rounded-full ${
                  isOpen ? "w-8 -rotate-45 -translate-y-2.5 bg-[#FF6B35]" : "w-4 group-hover:w-8"
                }`} 
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[90] flex items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 p-12">
           {navLinks.map((link, idx) => (
             <Link
               key={link.path}
               href={link.path}
               onClick={() => setIsOpen(false)}
               className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all hover:scale-110 active:scale-95 ${
                 pathname === link.path ? "text-[#FF6B35]" : "text-white"
               }`}
             >
               {link.name}
             </Link>
           ))}

           <Link
             href="/membership"
             onClick={() => setIsOpen(false)}
             className="mt-12 w-full max-w-xs bg-[#FF6B35] text-white py-6 px-12 text-center text-[10px] font-black uppercase tracking-[0.4em] transform hover:scale-105 transition-all shadow-2xl"
           >
             Join Now
           </Link>
        </div>
      </div>
    </>
  );
}
