import React, {useState} from 'react'
import {navItems} from '../constants/index'
import styles from '../style'
import logo from '../assets/imgs/Logo.png'
import menu from '../assets/imgs/menu.svg'
import close from '../assets/imgs/close.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='navbar'>
      <nav className='flex justify-between sm:flex py-6 items-center px-5 text-white'>
        <div id='home' className='logo'>
      <img src={logo}  className='w-[134px] h-[24px]' alt="home"   />
        </div>
        <ul className='md:flex hidden'>
          {navItems.map((nav,index)=> (
            <li key={nav.id} className='ml-10'>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className='w-[29px] h-[28px] object-contain' onClick={() => setToggle((prev)  => !prev)}   />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#4F9CF9] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className="list-none flex-col">
      {navItems.map((nav,index) => (
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white`}>
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}
      </ul>
        </div>
      </div>

        <div className='nav-buttons md:flex hidden'>
           <a href='https://github.com/pr4th4meshh'> <button className={`${styles.buttonYellow} ml-6`}>Github</button></a>
           <a href='https://github.com/pr4th4meshh/whitepace-web'> <button className={`${styles.buttonBlue} ml-6`}>Project Code &rarr;</button> </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar