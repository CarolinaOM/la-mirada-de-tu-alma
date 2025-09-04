import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';

const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "#",
    hoverColor: "hover:text-purple-600",
  },
  {
    id: 2,
    title: "Filosofía",
    link: "#",
    hoverColor: "hover:text-purple-600",
  },
  {
    id: 3,
    title: "Terapias",
    link: "#",
    hoverColor: "hover:text-purple-600",
  },
  {
    id: 4,
    title: "Contacto",
    link: "#",
    hoverColor: "hover:text-purple-600",
  },
];

const navbarNetworks = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com/lamiradadetualma/",
    icon: 'bi bi-instagram',
    defaultColor: 'text-black', // Color por defecto
    hoverColor: 'hover:text-[#E1306C]' // Instagram color
  },
  {
    id: 2,
    title: "Youtube",
    link: "https://www.youtube.com/@lamiradadetualma261",
    icon: 'bi bi-youtube',
    defaultColor: 'text-black', // Color por defecto
    hoverColor: 'hover:text-[#FF0000]' // YouTube color
  },
  {
    id: 3,
    title: "TikTok",
    link: "https://www.tiktok.com/@lamiradadetualma",
    icon: 'bi bi-tiktok',
    defaultColor: 'text-black', // Color por defecto
    hoverColor: 'hover:text-gray-400' // TikTok color al pasar el cursor
  },
  {
    id: 4,
    title: "Facebook",
    link: "https://www.facebook.com/lamiradadetualma.lamiradadetualma.1",
    icon: 'bi bi-facebook',
    defaultColor: 'text-black', // Color por defecto
    hoverColor: 'hover:text-[#4267B2]' // Facebook color
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

        {/* Navbar Logo */}
        <div>
          <img src={Logo} alt='Logo del sitio' className='w-[100px]' />
        </div>

        {/* Menu and Social Networks */}
        <div className='flex items-center flex-grow justify-end'>

          {/* Hamburger button */}
          <button className='md:hidden text-black' onClick={toggleMenu}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isMenuOpen ? (
                // Close button (X) icon
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className='hidden md:flex flex-grow justify-center'>
            <ul className='list-none flex gap-6 sm:gap-12'>
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={`block px-2 font-medium tracking-wide no-underline text-black transition hover:scale-110 transform inline-block duration-300 ${link.hoverColor}`}
                    href={link.link}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className='hidden md:flex'>
            <ul className='list-none flex gap-3 sm:gap-6'>
              {navbarNetworks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-2xl no-underline transition transform hover:scale-125 duration-300 ${link.defaultColor} ${link.hoverColor}`}
                  >
                    <i className={link.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} flex-col items-center absolute top-20 w-full z-10 shadow-lg bg-sky-200/70 backdrop-blur-sm`}>
        <ul className='list-none flex flex-col items-center py-4'>
          {navbarLinks.map((link) => (
            <li key={link.id} className='w-full text-center'>
              <a
                className={`block py-2 font-medium tracking-wide text-black transition no-underline ${link.hoverColor}`}
                href={link.link}
                onClick={toggleMenu}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='w-full h-px bg-gray-300 my-2'></div>

        <ul className='list-none flex justify-center gap-6 py-4'>
          {navbarNetworks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-2xl no-underline transition transform hover:scale-125 duration-300 ${link.defaultColor} ${link.hoverColor}`}
                    onClick={toggleMenu}>
                    <i className={link.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      );
    };
    
export default Navbar;