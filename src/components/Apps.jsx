import React from 'react'
import styles from '../style'
import AppImage from '../assets/imgs/AppImage.png'

const Apps = () => {
  return (
    <section className={`${styles.paddingY} flex flex-col md:flex-row`}>
    <div className={`flex flex-1 ${styles.flexStart} px-6  `}>
   <img src={AppImage} alt="app" className='w-[530px] h-[430px] sm:pl-12 pt-16 ' />
 </div>
 <div className={`flex flex-1 flex-col xl:px-0 sm:px-16 px-6 sm:items-start items-center sm:text-start text-center justify-center`}> 
   <h1 className='font-semibold mb-4 text-white ss:text-[56px] pt-16 text-[36px]'>Work with Your Favorite Apps <br className='sm:block hidden' /> Using <br className='sm:block hidden' /> whitepace</h1>
   <p className={`mb-8 text-white leading-8 ${styles.paragraph} `}>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
</p>
   <button className={`${styles.buttonBlue} mb-8 w-[220px]`}>Read More &rarr;</button>
 </div>

</section>
  )
}

export default Apps