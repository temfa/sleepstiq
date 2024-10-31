import React from "react";
import styles from "./styles.module.css";

const Visit = () => {
  return (
    <div className={styles.visitContainer}>
      <h2>Visit Our Shop</h2>
      <p>
        Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow
        you out, quiet the mind, and lull you to bed.
      </p>
      <button>Visit Shop</button>
    </div>
  );
};

export default Visit;
