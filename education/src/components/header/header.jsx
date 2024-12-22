import React from 'react'
import Button from '../button/button'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import heroImg from '../../assets/heroImg.png'
import heroBgImg from '../../assets/heroBgImg.png'
const Header = () => {
  return (
    <header className='Container flex justify-between'>
      <div className='w-[50%] flex flex-col justify-center gap-5'>
        <h2 className='text-[52px]'>Online <span className='text-[#525FE1] font-extrabold	'>Learning
          you can access</span> any
          where easily!˝</h2>
        <p className='text-[#808080] w-[548px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</p>
        <div className='flex gap-5'>
          <Button text={'join course'}/>
          <button className='hover:bg-[#FFCF59] rounded-2xl py-3 px-7'><PlayCircleIcon /> See how it works?</button>
        </div>
      </div>
      <div className='bg-no-repeat pt-10 flex justify-start items-center w-[50%]' style={{ backgroundImage: `URL(${heroBgImg})` }}>
        <img src={heroImg} alt="" />
      </div>
    </header>
  )
}

export default Header