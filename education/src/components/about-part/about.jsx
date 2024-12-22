import React from 'react'
import aboutBgImg from '../../assets/aboutBgImg.png'
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
import { grey } from '@mui/material/colors';

const About = () => {
  return (
    <div className='Container relative'>
      <img src={aboutBgImg} alt="aboutBgImg"/>
      <PlayCircleFilledTwoToneIcon sx={{ fontSize: 50, color: 'grey' }}  className='absolute top-[50%] left-[50%] cursor-pointer'/>
    </div>
  )
}

export default About