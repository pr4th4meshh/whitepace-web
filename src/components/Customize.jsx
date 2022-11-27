import React from 'react'
import hero_image from '../assets/imgs/hero_image.jpg'
import styles from '../style'

const Customize = () => {
  return (
    <section className={`${styles.paddingY} flex flex-col md:flex-row`}>
    <div className={`flex flex-1 ${styles.flexStart}`}>
   <img src={hero_image} alt="" />
 </div>
 <div className={`flex flex-1 flex-col xl:px-0 sm:px-16 px-0 ${styles.flexStart}`}> 
   <h1 className='font-semibold mb-4 ss:text-[72px] pt-16 text-[56px]'>Customise it
to your needs</h1>
   <p className='mb-8 leading-8'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
</p>
   <button className={`${styles.buttonBlue} mb-8 w-[220px]`}>Let's Go &rarr;</button>
 </div>

</section>
  )
}

export default Customize