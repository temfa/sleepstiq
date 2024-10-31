"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { faqData } from "@/utils/data";

const Faq = () => {
  const [active, setActive] = useState(-20);
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqSide}>
        <div>
          <p>Sleepstiq Product</p>
          <div className={styles.rectangle}></div>
        </div>
        <p>Order</p>
        <p>Melantonin</p>
      </div>
      <div className={styles.faqBody}>
        {faqData?.map((item, index) => {
          return (
            <div
              className={styles.faqSingle}
              key={index}
              onClick={() => {
                if (active === index) setActive(-22);
                else setActive(index);
              }}>
              <h2>{item.question}</h2>
              {active === index ? <p>{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
