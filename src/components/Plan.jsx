import React from 'react'
import { planItems } from '../constants'
import Icon from '../assets/imgs/Icon.png'
import styles from '../style'

const Plan = () => {
  return (
    <section id='plans' className={`${styles.boxWidth} ${styles.paddingY} flex flex-col`}>
    <div className={`mb-16 text-center flex flex-wrap ${styles.flexCenter}`}>
      <h1 className='sm:text-[62px] text-[52px] font-semibold '>Choose Your Plan</h1>
      <p className={`text-[18px] ${styles.paragraph} `}>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the <br className='sm:block hidden' /> right plan for you.</p>
    </div> 
     <div className={`flex flex-1 flex-row ${styles.flexStart} flex-wrap w-full`}>
    {planItems.map((plan, id ) => (
      <div className={`flex flex-1 flex-col mx-4 px-8 py-4 h-[700px] flex-center rounded-[20px] border-solid border-[1px]  border-[#FFE492] sm:leading-[32px] leading-[25px]  ${ id == planItems.length - 2 ? 'bg-primary text-white md:h-[754px] mt-0 h-[750px] md:mb-24 justify-center' : 'bg-white md:h-[624px] justify-center text-black my-[60px]'} `}>
        <li className='list-none mb-6 ' key={plan.id}> <h1 className='sm:text-[24px] font-semibold '>{plan.type}</h1></li>
        <li  className={`list-none mb-6 ${ id == planItems.length - 2 ? 'text-[#FFE492]' : 'text-black'} `} key={plan.id}> <h1 key={plan.id} className='sm:text-[24px] font-semibold'>{plan.price}</h1></li>
        <li  className='list-none' key={plan.id}> <h1 className='sm:text-[14px] font-semibold'>{plan.headingText}</h1> </li>
        <li className=' listStyleImage' key={plan.id}>{plan.featureOne}</li>
        <li className='listStyleImage' key={plan.id}>{plan.featureTwo} </li>
        <li className='listStyleImage' key={plan.id}>{plan.featureThree} </li>
        <li className='listStyleImage' key={plan.id}>{plan.featureFour} </li>
        <li className='listStyleImage' key={plan.id}>{plan.featureFive} </li>
        <li className='listStyleImage' key={plan.id}>{plan.featureSix} </li>
        <button className={`${styles.buttonBlue} h-[60px] mt-8`}>Get Started</button>
      </div>
    ))}
    </div>
    </section>
  )
}

export default Plan