import React from 'react'
import LargeLogo from '../../assets/EducationBigLogo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className='bg-[#111538] h-[30vh] text-white'>
      <div className='h-full Container flex justify-between items-center py-[50px]'>
        <div className='w-[280px] flex flex-col gap-5'>
          <img src={LargeLogo} alt="LargeLogo" />
          <p className=''>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className='flex gap-3 '>
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <TwitterIcon />
          </div>
        </div>
        <ul className='w-[280px] flex flex-col gap-3'>
          <h3 className='mb-2 font-bold leading-[36px] text-[24px]'>About</h3>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">News & Blogs</a></li>
          <li><a href="#">Help & Supports</a></li>
        </ul>
        <ul className='w-[280px] flex flex-col gap-3'>
          <h3 className='mb-2 font-bold leading-[36px] text-[24px]'>Company</h3>
          <li><a href="#">How we work</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <div className='w-[280px] flex flex-col gap-3'>
          <h3 className='mb-2 font-bold leading-[36px] text-[24px]'>Contact Us</h3>
          <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
          <p>+1 202-918-2132</p>
          <p>education@mail.com</p>
          <p><a className='hover:text-[#c1c1c1]' href="#">www.education.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer