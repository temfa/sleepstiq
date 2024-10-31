import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Mission = () => {
  return (
    <div className={styles.missionContainer}>
      <div className={styles.missionWrapper}>
        <div className={styles.missionSide}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p>
            We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly
            things like school, work, screens, numbers, and people. That&lsquo;s why we created products that aim to -
          </p>
          <div>
            <p>✓ Promote Calm</p>
            <p> ✓ Support Sleep </p>
            <p>✓ Reduce Stress </p>
            <p>✓ Aid Relaxation</p>
          </div>
        </div>
        <Image src="/images/mission.png" width={735} height={550} alt="Mission Image" />
      </div>
    </div>
  );
};

export default Mission;
