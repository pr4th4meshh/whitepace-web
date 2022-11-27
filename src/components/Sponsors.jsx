import React from 'react'
import styles from '../style'
import microsoft from '../assets/imgs/microsoft.png'
import Google from '../assets/imgs/Google.png'
import Apple from '../assets/imgs/Apple.png'
import Slack from '../assets/imgs/Slack.png'

const Sponsors = () => {
  return (
    <section className={`flex ${styles.flexCenter} flex-col ${styles.paddingY} `}>
      <div className={`flex items-center justify-center text-center`}>
      <h1 className='sm:text-[56px] text-[56px] mb-16 font-semibold'>Our sponsors</h1>
      </div>
    
    <div className={`flex flex-wrap justify-between items-center w-full md:flex-row flex-col`}>
    <img src={Google} className='sm:w-[192px] w-[100px] sm:h-[82px] h-[92px] object-contain mb-6 ' alt=""   />
    <img src={microsoft} className='sm:w-[192px] w-[100px] sm:h-[82px] h-[92px] object-contain mb-6 ' alt=""   />
    <img src={Google} className='sm:w-[192px] w-[100px] sm:h-[82px] h-[92px] object-contain mb-6 ' alt=""   />
    <img src={Slack} className='sm:w-[192px] w-[100px] sm:h-[82px] h-[92px] object-contain mb-6 ' alt=""   />
    </div>

    </section>
  )
}

export default Sponsors