import React from 'react'
import work from '../assets/imgs/work.png'
import styles from '../style'

const Work = () => {
  return (
    <section className={`${styles.paddingY} flex flex-col-reverse md:flex-row`}>
       <div className={`flex flex-1 ${styles.flexStart} `}>
      <img src={work} alt="" />
    </div>
    <div className={`flex flex-1 flex-col xl:px-0 sm:px-16 px-0 sm:items-start items-center sm:text-start text-center justify-center`}> 
      <h1 className={`font-semibold mb-4 ss:text-[72px] text-[56px]`}>Work together</h1>
      <p className={`mb-8 leading-8 ${styles.paragraph}`}>With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
</p>
      <button className={`${styles.buttonBlue} mb-8 w-[220px]`}>Get Started &rarr;</button>
    </div>
   
  </section>
  )
}

export default Work