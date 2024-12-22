import React from 'react'
import stsBgImg from '../../assets/stsBgImg.png'

const Data = [
  {
    id: 1,
    title: '150+',
    about: 'Total Courses',
  },
  {
    id: 2,
    title: '250',
    about: 'Total Instructor',
  },
  {
    id: 3,
    title: '35k+',
    about: 'Total Student',
  },
]
// background: linear-gradient(90.05deg, #525FE1 -3.7%, #2E3899 102.51%);

const Sts = () => {
  return (
    <div style={{backgroundImage: `URl(${stsBgImg})`}} className='w-full bg-no-repeat bg-cover flex justify-center  h-[160px] items-center'>
      <div className="Container">
        <div className='w-[675px] flex justify-between '>
          {
            Data.map((item) => {
              return (
                <div className='text-white text-center' key={item.id}>
                  <h3 className='font-extrabold text-[45px] leading-[70px]'>{item.title}</h3>
                  <span className=''>{item.about}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sts