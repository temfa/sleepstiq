import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const ShopNow = () => {
  return (
    <div className={styles.shopNowContainer}>
      <div className={styles.shopNowImage}>
        <Image src="/images/sleepstiq.png" width={477} height={519} alt="Sleepstiq" />
        <div className={styles.shopNowQualities}>
          <h3>😊 Promotes calm and relaxation.</h3>
          <h3>💤 Inhalation allows for a rapid effect.</h3>
          <h3>✅ 100% drug-free, plant-based ingredients.</h3>
          <h3> ‍⚕️ 3rd-party lab tested.</h3>
        </div>
      </div>
      <div className={styles.shopNowText}>
        <h2>Shop Now</h2>
        <p>
          Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will
          mellow you out, quiet the mind, and lull you to bed.
        </p>
        <button>Visit Shop</button>
      </div>
    </div>
  );
};

export default ShopNow;
