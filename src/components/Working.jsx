import React from "react";
import styles from "../style";
import BACKGROUND from "../assets/imgs/BACKGROUND.png";

const Working = () => {
  return (
    <div className={`mb-16 text-center flex flex-col items-center justify-center py-28 px-22 `}>
    <h1 className='sm:text-[62px] text-white text-[52px] font-semibold '>Your work, everywhere you are</h1>
    <p className={`text-[18px] pt-6 pText text-white ${styles.paragraph} px-6 `}>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and <br className="sm:block hidden" /> OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
    <button className={`${styles.buttonBlue} mt-14 `}>Try Taskey &rarr;</button>
  </div> 
  );
};

export default Working;
