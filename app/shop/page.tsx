import AboutProduct from "@/components/about-product";
import Footer from "@/components/footer";
import ShopBanner from "@/components/shop-banner";
import React from "react";
import styles from "./styles.module.css";
import Testimonials from "@/components/testimonials";

const Shop = () => {
  return (
    <>
      <ShopBanner />
      <AboutProduct />
      <div className={styles.testimonialContainer}>
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
