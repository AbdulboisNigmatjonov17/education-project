import React from 'react'
import Logo from '../../assets/EducationLogo.svg'

const Navbar = () => {
  return (
    <nav className='Container flex justify-between h-[10vh] items-center'>
      <a href="/">
        <img src={Logo} alt="EduLogo" />
      </a>
      <ul className='flex gap-5'>
        <li><a className='forA' href="#">Home</a></li>
        <li><a className='forA' href="#">Teachers</a></li>
        <li><a className='forA' href="#">Courses</a></li>
        <li><a className='forA' href="#">Pricing</a></li>
        <li><a className='forA' href="#">About Us</a></li>
      </ul>
      <div className='flex gap-1'>
        <button className='hover:text-white hover:bg-gradient-to-r from-[#525FE1] to-[#2E3899] rounded-2xl py-3 px-7 font-bold'>Sign in</button>
        <button className='bg-gradient-to-r from-[#525FE1] to-[#2E3899] rounded-2xl py-3 px-7 text-white uppercase font-bold'>Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar