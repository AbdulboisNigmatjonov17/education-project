import React from 'react'
// Card Imgs
import Img1 from '../../assets/CardImg1.png'
import Img2 from '../../assets/CardImg2.png'
import Img3 from '../../assets/CardImg3.png'
import Button from '../button/button'

const CardData = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
  },
  {
    id: 3,
    img: Img3,
  },
]

const Programs = () => {
  return (
    <div className='flex justify-between relative'>
      {CardData.map((item)=>{
        return(
          <div className='shadow-2xl w-[360px] h-[410px] rounded-xl hover:-translate-y-5'>
            <img src={item.img} alt={item.id} />
            <div className='p-3 pt-0 flex flex-col gap-1 text-center items-center'>
              <h3 className='font-bold text-[22px] leading-[33px]'>English Programs</h3>
              <p className='text-[#4D4D4D]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley......
              </p>
              <Button text={'Read More'} className='absolute -bottom-50px left-[50%]'/>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Programs