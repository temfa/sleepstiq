import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Up from "@/svgs/up";
import Down from "@/svgs/down";

const AboutProduct = () => {
  return (
    <div className={styles.aboutProduct}>
      <Image src="/images/sleepstiq.png" width={477} height={519} alt="Product" />
      <div className={styles.aboutProductSide}>
        <h2>About Product</h2>
        <div className={styles.aboutProductDetails}>
          <p>
            Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will
            mellow you out, quiet the mind, and lull you to bed.
          </p>
          <div>
            <h3>😊 Promotes calm and relaxation.</h3>
            <h3>💤 Inhalation allows for a rapid effect.</h3>
            <h3>✅ 100% drug-free, plant-based ingredients.</h3>
            <h3> ‍⚕️ 3rd-party lab tested.</h3>
          </div>
          <div className={styles.aboutProductEarn}>
            <div className={styles.aboutProductPrice}>
              <p>Price</p>
              <h2>USD 50</h2>
            </div>
            <div className={styles.aboutProductUnit}>
              <p>Unit</p>
              <div className={styles.unit}>
                <h2>2</h2>
                <div>
                  <Up />
                  <Down />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default AboutProduct;
