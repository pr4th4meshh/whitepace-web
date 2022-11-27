import React from 'react'
import styles from '../style'
import AppleWhite from '../assets/imgs/AppleWhite.png'
import Android from '../assets/imgs/Androidpng.png'
import Windows from '../assets/imgs/Windows.png'
import Logo from '../assets/imgs/Logo.png'
import Twitter from '../assets/imgs/Twitter.png'
import Facebook from '../assets/imgs/Facebook.png'
import Linkedin from '../assets/imgs/Linkedin.png'
import { footerLinks } from '../constants'

const FooterHero = () => {
  return (
    <section className={`${styles.paddingY}`}  >
      <div className={`mb-16 text-center flex flex-col gap-[20px] items-center justify-center py-28 px-22`}>
        <h1 className='sm:text-[54px] text-[54px] text-white font-semibold ' >Try Whitepace <br className='sm:block hidden' /> today</h1>
        <p className={`  ${styles.paragraph} sm:text-[14px] text-16px text-white `} >Get started for free. <br className='sm:block hidden' />
Add your whole team as your needs grow.</p>
      <button className={`${styles.buttonBlue}`} >Try Taskey free &rarr;</button>
      <p className={`  ${styles.paragraph} sm:text-[14px] text-16px text-white `}>On a big team? Contact sales</p>
      <div className='flex flex-row'>
        <img src={AppleWhite} alt="" className=' cursor-pointer w-[60px] h-[60px] mr-[20px] '   />
        <img src={Android} alt="" className='w-[60px] h-[60px] cursor-pointer '   />
        <img src={Windows} alt="" className='w-[60px] h-[60px] ml-[20px] cursor-pointer '   />
      </div>
      </div>

    <div id='contact' className='flex flex-col md:flex-row flex-wrap justify-around'>
    <div className='flex flex-[0.5] sm:pb-0 pb-4 flex-col '>
      <img src={Logo} className='w-[134px] h-[24px] mb-4 ' alt="" />
      <p className={`text-white sm:text-[18px] text-[19px]  ${styles.paragraph} `}>Contact Me At: <br className='sm:block hidden' /> +91 75 06 09 68 26<br className='sm:block hidden' /> @ekprathamesh1@gmail.com<br className='sm:block ' /> Github @pr4th4meshh <br className='sm:block hidden' /></p>
    </div>

    <div className="flex-[1] text-white w-full flex flex-row justify-between mx-[0px] flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    <div className='flex flex-[0.5] flex-col sm:ml-20 ml-0 sm:pt-0 pt-6'>
      <h1 className='text-white sm:text-[28px] text-[14px] pb-2 '>Try It Today</h1>
      <p className={`  ${styles.paragraph} text-white sm:text-[18px] pb-6 font-extralight text-[19px] `} >Get started for free.
Add your whole team as your <br className='sm:block hidden' /> work. We make a better <br className='sm:block hidden' /> needs grow.</p>
<button className={`${styles.buttonBlue}`}>Start Today &rarr;</button>
    </div>

    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 mt-20 border-t-[1px] border-t-[#fff]">
      <p className={`  ${styles.paragraph} text-center  text-white`}>
        Copyright Ⓒ 2022 whitepace. All Rights Reserved.
      </p>

      <div className='flex flex-row py-6' >
      <img src={Twitter} alt="" />
      <img src={Facebook} alt="" className='pl-6' />
      <img src={Linkedin} className='pl-6' alt="" />
      </div>
  
    </div>

    </section>
  )
}

export default FooterHero