import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
    hoverColor: "hover:text-purple-400",
  },
  {
    id: 2,
    title: "Filosofía",
    link: "/filosofia",
    hoverColor: "hover:text-purple-400",
  },
  {
    id: 3,
    title: "Terapias",
    link: "/terapias",
    hoverColor: "hover:text-purple-400",
  },
  {
    id: 4,
    title: "Contacto",
    link: "/contacto",
    hoverColor: "hover:text-purple-400",
  },
];

const navbarNetworks = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com/lamiradadetualma/",
    icon: 'bi bi-instagram',
    defaultColor: 'text-white',
    hoverColor: 'hover:text-[#E1306C]'
  },
  {
    id: 2,
    title: "Youtube",
    link: "https://www.youtube.com/@lamiradadetualma261",
    icon: 'bi bi-youtube',
    defaultColor: 'text-white',
    hoverColor: 'hover:text-[#FF0000]'
  },
  {
    id: 3,
    title: "TikTok",
    link: "https://www.tiktok.com/@lamiradadetualma",
    icon: 'bi bi-tiktok',
    defaultColor: 'text-white',
    hoverColor: 'hover:text-gray-400'
  },
  {
    id: 4,
    title: "Facebook",
    link: "https://www.facebook.com/lamiradadetualma.lamiradadetualma.1",
    icon: 'bi bi-facebook',
    defaultColor: 'text-white',
    hoverColor: 'hover:text-[#4267B2]'
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      {/* Menú de Escritorio con degradado transparente y blur */}
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3 text-white
                    bg-gradient-to-b from-gray-700/80 to-gray-700/0 backdrop-blur-sm'>
        {/* Navbar Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt='Logo del sitio' className='w-[100px]' />
          </Link>
        </div>

        {/* Menu and Social Networks */}
        <div className='flex items-center flex-grow justify-end'>

          {/* Hamburger button */}
          <button className='md:hidden text-white transition hover:text-purple-400' onClick={toggleMenu}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
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
                  <Link
                    className={`block px-2 font-medium tracking-wide no-underline text-white transition hover:scale-110 transform inline-block duration-300 ${link.hoverColor}`}
                    to={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón de Reservar Cita para Calendario */}
          <Link
            to="/reservar-cita"
            className="hidden md:block ml-12 px-6 py-2 bg-purple-600 text-white font-medium rounded-full shadow-lg transition hover:bg-purple-700 transform hover:scale-105"
          >
            Reservar Cita
          </Link>

          {/* Social Media Icons */}
          <div className='hidden md:flex ml-4'>
            <ul className='list-none flex gap-3 sm:gap-6'>
              {navbarNetworks.map((link) => (
                <li key={link.id}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer" className={`block text-2xl no-underline transition transform hover:scale-125 duration-300 ${link.defaultColor} ${link.hoverColor}`}>
                    <i className={link.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Menú Móvil sin transparencia (mantiene el fondo sólido) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} flex-col items-center absolute top-20 w-full z-10 shadow-lg bg-gray-700 text-white`}>
        <ul className='list-none flex flex-col items-center py-4'>
          {navbarLinks.map((link) => (
            <li key={link.id} className='w-full text-center'>
              <Link
                className={`block py-2 font-medium tracking-wide text-white transition no-underline ${link.hoverColor}`}
                to={link.link}
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            </li>
          ))}
          {/* Botón de Reservar Cita en el menú móvil */}
          <li className="w-full text-center mt-4">
            <Link
              to="/reservar-cita"
              className="block py-2 px-6 font-medium text-white bg-purple-600 rounded-full transition hover:bg-purple-700"
              onClick={toggleMenu}
            >
              Reservar Cita
            </Link>
          </li>
        </ul>

        <div className='w-full h-px bg-gray-600 my-2'></div>

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