import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Início', href: '#início' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'História', href: '#historia' },
  { name: 'Serviços', href: '#serviços' },
  { name: 'UPTI', href: '#upti' },
  { name: 'Saúde Mental', href: '#saude-mental' },
  { name: 'Unidades', href: '#unidades' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Blog', href: '#blog' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Convênios', href: '#convênios' },
  { name: 'Contato', href: '#contato' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('início');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const headerHeight = 80; // Approximate header height
      let currentSection = 'início';
      
      navLinks.forEach(link => {
        const elem = document.getElementById(link.href.substring(1));
        if (elem) {
          const elemTop = elem.offsetTop - headerHeight;
          const elemBottom = elemTop + elem.offsetHeight;
          if (scrollPosition >= elemTop && scrollPosition < elemBottom) {
            currentSection = link.href.substring(1);
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const headerOffset = 80; // Height of the fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    if(isOpen) {
      setIsOpen(false);
    }
  };


  // FIX: Explicitly type NavLink as a React.FC to correctly handle the 'key' prop.
  type NavLinkProps = {
    name: string;
    href: string;
    isMobile?: boolean;
  };

  const NavLink: React.FC<NavLinkProps> = ({ name, href, isMobile = false }) => (
    <a
      href={href}
      onClick={(e) => handleLinkClick(e, href)}
      className={`relative group transition-colors duration-300
        ${activeSection === href.substring(1) ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'}
        ${isMobile ? 'block py-3 text-2xl' : ''}`}
    >
      {name}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 
        ${activeSection === href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}>
      </span>
    </a>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#início" onClick={(e) => handleLinkClick(e, '#início')}>
            <img src="https://i.postimg.cc/HW6c2LrS/Design-sem-nome.gif" alt="Hospital Rumo Certo Logo" className="h-16 w-16 rounded-full object-cover" />
          </a>
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} name={link.name} href={link.href} />
            ))}
          </nav>
          <button
            className="lg:hidden text-slate-200 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </header>
      
      <div className={`fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link) => (
            <NavLink key={link.name} name={link.name} href={link.href} isMobile />
          ))}
        </nav>
      </div>
    </>
  );
};
export default Header;