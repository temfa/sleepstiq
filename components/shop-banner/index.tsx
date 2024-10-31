import React from "react";
import styles from "./styles.module.css";
import Header from "../header";

const ShopBanner = () => {
  return (
    <div className={styles.shopBanner}>
      <Header />
      <div className={styles.shopWrapper}>
        <p>We&lsquo;re here to help you</p>
        <h2>Relax & Rest</h2>
      </div>
    </div>
  );
};

export default ShopBanner;
