import React from 'react'

const Section = ({title, span, component}) => {
  return (
    <section className='Container flex gap-5 flex-col'>
      <div className='flex flex-col items-center'>
        <h2 className='text-[52px] font-normal leading-[66px]'><span className='text-[#525FE1] font-bold'>{span}</span> {title}</h2>
        <p className='text-[#333333] w-[1080px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</p>
      </div> 
      {component}
    </section>
  )
}

export default Section
