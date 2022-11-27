import React from 'react'
import bill from '../assets/imgs/bill.png'
import styles from '../style'

const Extension = () => {
  return (    
    <section id='extension' className={`${styles.paddingY} flex flex-col md:flex-row `}>
      <div className={`flex flex-1 flex-col xl:px-0 sm:px-16 px-6 sm:items-start items-center sm:text-start text-center justify-center`}> 
        <h1 className='font-semibold mb-4 ss:text-[72px] text-[56px] text-white'>Use as Extension</h1>
        <p className={`mb-8 text-white ${styles.paragraph} leading-[30px] font-extralight`}>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
</p>
        <button className={`${styles.buttonBlue} mb-8 w-[140px]`}>Let's Go &rarr;</button>
      </div>
      <div className={`flex flex-1 ${styles.flexCenter} xl:px-0 sm:px-16 px-6`}>
        <img src={bill} alt="" />
      </div>
    </section>

  )
}

export default Extension