import React from "react";
import styles from "./styles.module.css";
import Header from "../header";
import Partners from "../partners";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Header />
      <div className={styles.bannerWrapper}>
        <div>
          <h3>We&apos;re here to help you</h3>
          <h2>Relax & Rest</h2>
          <p>With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.</p>
        </div>
        <button>Visit Shop</button>
      </div>
      <Partners />
    </div>
  );
};

export default Banner;
