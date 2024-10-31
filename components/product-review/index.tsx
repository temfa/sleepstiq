"use client";
import React from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import { productReview } from "@/utils/data";
import SingleProducts from "../single-products";

const ProductReview = () => {
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
    <div className={styles.productReviewContainer}>
      <h2>Product Reviews</h2>
      <div className={styles.productWrap}>
        <div className={styles.productWrapper}>
          <Slider {...settings}>
            {productReview?.map((item, index) => {
              return <SingleProducts name={item.name} image={item.image} text={item.text} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
