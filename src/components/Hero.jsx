import React from "react";
import styles from "../style";
import robot from "../assets/imgs/robot.png";
const Hero = () => {
  return (
    <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
     
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Get More Done  <br className="sm:block hidden" />{" "} with {' '}
          <span className="text-gradient">whitepace</span>{" "}
        </h1>
      </div>
     
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        {" "}
        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks{" "}
      </p>

      <button className={`${styles.buttonBlue} w-[220px] mt-6`}>Try Whitepace free &rarr;</button>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
      <img src={robot} alt="billing" className=""   />
    </div>
  </section>
  );
};

export default Hero;
