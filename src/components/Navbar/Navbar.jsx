import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';

const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "#"
  },
  {
    id: 2,
    title: "Filosofía",
    link: "#"
  },
  {
    id: 3,
    title: "Terapias",
    link: "#"
  },
  {
    id: 4,
    title: "Contacto",
    link: "#"
  },
];

const navbarNetworks = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com/lamiradadetualma/",
    icon: 'bi bi-instagram'
  },
  {
    id: 2,
    title: "Youtube",
    link: "https://www.youtube.com/@lamiradadetualma261",
    icon: 'bi bi-youtube'
  },
  {
    id: 3,
    title: "TikTok",
    link: "https://www.tiktok.com/@lamiradadetualma",
    icon: 'bi bi-tiktok'
  },
  {
    id: 4,
    title: "Facebook",
    link: "https://www.facebook.com/lamiradadetualma.lamiradadetualma.1",
    icon: 'bi bi-facebook'
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

        {/* Navbar Logo */}
        <div>
          <img src={Logo} alt='Logo del sitio' className='w-[100px]' />
        </div>

        {/* Menu and Social Networks (Main Container) */}
        <div className='flex items-center flex-grow justify-end'>

          {/* Hamburger button */}
          <button className='md:hidden text-white' onClick={toggleMenu}>
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
                    className="block px-2 font-medium tracking-wide no-underline hover:text-purple-600 transition hover:scale-110 transform inline-block duration-300"
                    href={link.link}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons (Desktop) */}
          <div className='hidden md:flex'>
            <ul className='list-none flex gap-3 sm:gap-6'>
              {navbarNetworks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-2xl no-underline hover:text-purple-600 transition transform hover:scale-125 duration-300"
                  >
                    <i className={link.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden on md screens and up) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} flex-col items-center absolute top-20 w-full z-10 shadow-lg bg-[#5d3fd3]`}>
        <ul className='list-none flex flex-col items-center py-4'>
          {navbarLinks.map((link) => (
            <li key={link.id} className='w-full text-center'>
              <a
                className="block py-2 font-medium tracking-wide text-white hover:text-sky-200 transition no-underline"
                href={link.link}
                onClick={toggleMenu}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='w-full h-px bg-gray-300 my-2'></div> {/* Separator line */}

        <ul className='list-none flex justify-center gap-6 py-4'>
          {navbarNetworks.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-2xl text-white hover:text-sky-200 transition no-underline"
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