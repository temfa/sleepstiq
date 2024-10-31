"use client";
import React from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import { testimonialsData } from "@/utils/data";
import Star from "@/svgs/star";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.productWrap}>
      <div className={styles.productWrapper}>
        <Slider {...settings}>
          {testimonialsData?.map((item, index) => {
            return (
              <div className={styles.testimonialsSingle} key={index}>
                <p>{item.text}</p>
                <div className={styles.testimonialsInfo}>
                  <h2>{item.name}</h2>
                  <div>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
