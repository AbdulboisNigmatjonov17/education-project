import stsBgImg from '../../assets/stsBgImg.png'
import userImg from '../../assets/userImg.png'
const StudentsSay = () => {
  return (
    <div className='w-full h-[235px] bg-no-repeat bg-cover rounded-3xl p-5 text-center flex justify-center relative items-center' style={{backgroundImage: `URL(${stsBgImg})`}}>
      <p className='text-[#fff] w-[1020px] text-[18px] leading-[18px] font-normal'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.........
      </p>
      <div className='absolute -bottom-[50%] flex flex-col items-center'>
        <img src={userImg} alt="userPhoto" />
        <h3 className='font-bold leading-[36px] text-[24px]'>James Thomas</h3>
        <span className='font-normal text-[16px] leading-[24px]'>GERMANY</span>
      </div>
    </div>
  )
}

export default StudentsSay