import React from 'react'
import secondHeroImg from '../../assets/secondHero.png'

const contentData = [
  {
    id: 1,
    num: '01',
    title: 'Choose a Program',
  },
  {
    id: 2,
    num: '02',
    title: 'Enroll and Submit Documents',
  },
  {
    id: 3,
    num: '03',
    title: 'Choose a Date and Time',
  },
  {
    id: 4,
    num: '04',
    title: 'Pick an Instructor',
  },
  {
    id: 5,
    num: '05',
    title: 'Then Start',
  },
]

const Effortless = () => {
  return (
    <div className='bg-[#FFCF59] pt-5 text-[#1c1c1c]'>
      <div className='Container flex items-center justify-between'>
        <img src={secondHeroImg} alt="secondHeroImg" />
        <div className='w-[550px]'>
          <h2 className='font-bold leading-[66px] text-[52px]'>Effortless Enrollment</h2>
          <p className='text-[18px] font-normal leading-[33px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
          <ul>
            {contentData.map((item) => {
              return (
                <li className='flex gap-5 bg-white w-[535px] h-20 my-5 items-center rounded-xl p-3 hover:border-[2px] hover:border-black cursor-pointer'>
                  <h2 className='text-[36px] leading-[55px] font-bold'>{item.num}</h2>
                  <h3 className='text-[22px] leading-[33px] font-bold'>{item.title}</h3>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Effortless
