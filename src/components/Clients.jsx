import React from 'react'
import styles from '../style'
import QuotePrimary from '../assets/imgs/QuotePrimary.png'
import QuoteWhite from '../assets/imgs/QuoteWhite.png'
import AvatarOne from '../assets/imgs/AvatarOne.png'
import AvatarTwo from '../assets/imgs/AvatarTwo.png'
import AvatarThree from '../assets/imgs/AvatarThree.png'

const Clients = () => {
  return (
    <section id='clients' className={`${styles.paddingY} flex flex-col `}>
      <div className={`${styles.flexCenter} pb-12 `} >
        <h1 className='sm:text-[52px] text-[46px] font-semibold'>What Our Clients Says</h1>
      </div>

      <div className={`flex flex-col md:flex-row `}>
      <div className={` cardShadow flex flex-col h-[480px]  px-[30px] gap-[20px] sm:py-[70px] py-[20px] mt-[30px] mx-[15px] ${styles.flexStart}`}>
        <img src={QuotePrimary} className='h-[61px] w-[86px] ' alt=""   />
        <p className={` ${styles.paragraph} pb-4 border-b-[1.5px] border-primary `}>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
        <div className='flex md:flex-row flex-col   justify-center items-center pt-2 '>
          <div className='flex flex-0 pr-8 gap-[8px]'>
          <img src={AvatarOne} className='h-[95px] w-[95px]  ' alt=""   />
          </div>
          
          <div className='flex flex-1 flex-col gap-[8px] '>
          <h1 className='sm:text-[16px] text-[16px] font-semibold' >Oberon Shaw, MCH</h1>
          <p className={`sm:text-[13px] text-[14px]  ${styles.paragraph} `} >Head of Talent Acquisition, North America</p>
          </div>

        </div>
   
      </div>

      <div className={`flex flex-col h-[480px]  px-[30px] gap-[20px] py-[20px] mx-[15px] mt-[30px]  ${styles.flexStart} cardShadow bg-[#4F9CF9] `}>
        <img src={QuoteWhite} className='h-[61px] w-[86px] ' alt=""   />
        <p className={`pb-4 text-white border-b-[1.5px] border-primary  ${styles.paragraph} `}>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
        <div className='flex md:flex-row flex-col  justify-center items-center pt-2 '>
          <div className='flex flex-0 pr-8 gap-[8px]'>
          <img src={AvatarTwo} className='h-[95px] w-[95px]  ' alt=""   />
          </div>
          
          <div className='flex flex-1 flex-col gap-[8px] '>
          <h1 className='sm:text-[16px] text-[16px] font-semibold' >Oberon Shaw, MCH</h1>
          <p className={`sm:text-[13px] text-[14px]  ${styles.paragraph} `} >Head of Talent Acquisition, North America</p>
          </div>

        </div>
   
      </div>

      <div className={`flex flex-col h-[480px]  px-[30px] gap-[20px] py-[20px] ${styles.flexStart} mt-[30px] mx-[15px] cardShadow  bg-[#4F9CF9] `}>
        <img src={QuoteWhite} className='h-[61px] w-[86px] ' alt=""   />
        <p className={`pb-4 text-white border-b-[1.5px] border-primary  ${styles.paragraph} `}>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
        <div className='flex md:flex-row flex-col justify-center items-center pt-2 '>
          <div className='flex flex-0 pr-8 gap-[8px]'>
          <img src={AvatarThree} className='h-[95px] w-[95px]  ' alt=""   />
          </div>
          
          <div className='flex flex-1 flex-col gap-[8px] '>
          <h1 className='sm:text-[16px] text-[16px] font-semibold' >Oberon Shaw, MCH</h1>
          <p className={`sm:text-[13px] text-[14px]  ${styles.paragraph} `} >Head of Talent Acquisition, North America</p>
          </div>

        </div>
   
      </div>
      </div>
      
    </section>
  )
}

export default Clients