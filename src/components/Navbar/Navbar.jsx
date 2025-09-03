import React from 'react'
import Logo from '../../assets/Logo.png'

const navbarLinks = [
  {
    id:1,
    title:"Inicio", 
    link:"/"
  },
  {
    id:2,
    title:"Filosofia", 
    link:"#"
  },
  {
    id:3,
    title:"Terapias", 
    link:"#"
  },
  {
    id:4,
    title:"Contacto", 
    link:"#"
  },
  
]

const navbarnNtworks = [
  {
    id:1,
    title:"Instagram", 
    link:"https://www.instagram.com/lamiradadetualma/",
    icon:'bi bi-instagram'
  },
  {
    id:2,
    title:"Youtube", 
    link:"https://www.youtube.com/@lamiradadetualma261",
    icon:'bi bi-youtube'
  },
  {
    id:3,
    title:"TikTok",
    link:"https://www.tiktok.com/@lamiradadetualma",
    icon:'bi bi-tiktok'
  },
  {
    id:4,
    title:"Facebook",
    link:"https://www.facebook.com/lamiradadetualma.lamiradadetualma.1",
    icon:'bi bi-facebook'
  },
  
]

const Navbar = () => {
  return (
    <nav className="bg-red-500">
      <div>

        <div>
          <img src={Logo} alt='Logo del sitio' className='!w-[100px]'/>
        </div>

        <div>
          <ul className="list-none">
            {navbarLinks.map ((link)=>
              <li key={link.id}>
                  <a href={link.link}>{link.title}</a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <ul className="list-none">
            {navbarnNtworks.map ((link)=>
              <li key={link.id}>
                  <a href={link.link}>
                    <i
                      className={`${link.icon}`}
                    >

                    </i>
                  </a>
              </li>
            )}
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
