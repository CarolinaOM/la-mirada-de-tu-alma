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
            <li>Redes</li>
            <li>Redes</li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
