import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Star from "@/svgs/star";

type Props = {
  image: string;
  text: string;
  name: string;
};

const SingleProducts: FC<Props> = ({ image, text, name }) => {
  return (
    <div className={styles.singleProducts}>
      <Image src={image} width={306} height={210} alt="Product" />
      <div className={styles.singleProductsDetails}>
        <p>{text}</p>
        <div className={styles.singleProductsName}>
          <h2>{name}</h2>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
