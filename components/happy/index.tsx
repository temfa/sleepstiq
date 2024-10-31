"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

const Happy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className={styles.happyContainer}>
      <div className={styles.happyWrapper}>
        <div className={styles.happySide}>
          <div>
            <h3>Our Amazing Story</h3>
            <div style={{ position: "relative", width: "fit-content" }}>
              <h2>10k+Happy Customers</h2>
              <div className={styles.rectangle}></div>
            </div>
          </div>
          <div>
            <p>There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
            <Link href="/about"> More know About us</Link>
          </div>
        </div>
        <div className={styles.happyRight}>
          <Slider {...settings}>
            <div className={styles.happySlide}>
              <h2>I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. </h2>
              <div className={styles.happySlideDetails}>
                <Image src="/images/ceo.png" width={84} height={84} alt="CEO" />
                <div>
                  <h2>James Miller</h2>
                  <p>CEO, Techbias</p>
                </div>
              </div>
            </div>
            <div className={styles.happySlide}>
              <h2>I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. </h2>
              <div className={styles.happySlideDetails}>
                <Image src="/images/ceo.png" width={84} height={84} alt="CEO" />
                <div>
                  <h2>James Miller</h2>
                  <p>CEO, Techbias</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Happy;
