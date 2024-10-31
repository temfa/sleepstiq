import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { footerLinks } from "@/utils/data";
import Link from "next/link";
import Facebook from "@/svgs/facebook";
import Twitter from "@/svgs/twitter";
import Google from "@/svgs/google";
import Linkedin from "@/svgs/linkedin";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Image width={134} height={89} alt="footer logo" src="/images/footer-logo.png" />
      <div className={styles.footerWrapper}>
        <div className={styles.footerLinks}>
          <h2>COMPANY</h2>
          <div>
            {footerLinks?.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.footerLinks}>
          <h2>CONTACT</h2>
          <div>
            <p>Phone</p>
            <h3>+234 708 507 3128</h3>
            <p>Address</p>
            <h3>16, Ogindipe Close, Upston Close</h3>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <h2>CONSUMER ADVISORY</h2>
          <div>
            <h4>
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This
              product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary.
            </h4>
            <h4>
              By using our website or product, you agree to follow our <Link href="/terms">terms of service.</Link>{" "}
            </h4>
          </div>
        </div>
        <div className={styles.footerLast}>
          <div className={styles.footerGet}>
            <h2>Get in Touch</h2>
            <p>Feel free to get in touch with us via email</p>
            <Link href="mailto:hello@sleepstiq.com">hello@sleepstiq.com</Link>
            <div className={styles.socials}>
              <Facebook />
              <Twitter />
              <Google />
              <Linkedin />
            </div>
          </div>
          <p>© 2020@sleepstiq. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
