import React from "react";
import styles from "./styles.module.css";
import { partnersData } from "@/utils/data";
import Image from "next/image";

const Partners = () => {
  return (
    <div className={styles.partnersContainer}>
      {partnersData?.map((item, index) => {
        return <Image src={item.image} width={item.width} height={item.height} alt="Partners Logo" key={index} />;
      })}
    </div>
  );
};

export default Partners;
