import React from 'react'
import {carData} from './cardData'
const Cards = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-y-5 justify-between'>
      {
        carData.map((item)=>{
          return(
            <div className='w-[360px] flex flex-col items-center text-center gap-2 border-[#525FE129] p-5 border-solid	border-2 rounded-xl cursor-pointer hover:shadow-2xl hover:scale-[1.1] ' key={item.id}>
              <img src={item.img} alt="cardImg" />
              <h2 className='text-[#1c1c1c] text-[22px] leading-8 font-semibold'>{item.title}</h2>
              <p className='text-[#4D4D4D] text-[14px] leading-5 w-[325px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.....</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cards