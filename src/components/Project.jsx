import React from 'react'
import styles from '../style'
import Card from '../assets/imgs/Card.png'

const Project = () => {
  return (
    <section id='projectmanagement' className={`${styles.paddingY} ${styles.boxWidth} flex  md:flex-row flex-col`}>
      <div className={`flex-1 flex-col sm:items-start items-center sm:text-start text-center justify-center`}> 
      <div className="flex flex-row  w-full">
        <h1 className='font-semibold flex flex-1 mb-4 ss:text-[72px] text-[46px]'>Project <br className="sm:block hidden" />{" "}  Management</h1>
        </div>
        <p className={`${styles.paragraph} text-black sm:mb-8 mb-8 mt-5 max-w-[470px]`}>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
        <button className={`${styles.buttonBlue} mb-8 w-[220px]`}>Get Started &rarr;</button>
      </div>
      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10`}>
        <img src={Card} alt="" />
      </div>
    </section>
  )
}

export default Project