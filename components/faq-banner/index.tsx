import React from "react";
import styles from "./styles.module.css";
import Header from "../header";
import Search from "@/svgs/search";

const FaqBanner = () => {
  return (
    <div className={styles.faqBanner}>
      <Header />
      <div className={styles.faqBannerContent}>
        <p>We&lsquo;re here to help you</p>
        <h2>How can we assist?</h2>
        <div>
          <Search />
          <input type="text" placeholder="Search FAQs here" />
        </div>
      </div>
    </div>
  );
};

export default FaqBanner;
