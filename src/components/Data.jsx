import React from 'react'
import DataImage from '../assets/imgs/DataImage.png'
import styles from '../style'

const Data = () => {
  return (
    <section className={`${styles.paddingY} flex flex-col md:flex-row`}>
       
    <div className={`flex flex-1 flex-col xl:px-0 sm:px-16 px-0 sm:text-start text-center ${styles.flexStart}`}> 
      <h1 className='font-semibold mb-4 ss:text-[72px] text-[56px]'>100% your data</h1>
      <p className={`mb-8 leading-8 ${styles.paragraph} `}>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
</p>
      <button className={`${styles.buttonBlue} mb-8 w-[220px]`}>Read More &rarr;</button>
    </div>

    <div className={`flex flex-1 ${styles.flexStart}`}>
      <img src={DataImage} alt="" />
    </div>
   
  </section>
  )
}

export default Data