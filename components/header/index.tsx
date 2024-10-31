"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { headerNav } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Close from "@/svgs/close";
import Bars from "@/svgs/bars";

const Header = () => {
  const pathname = usePathname();

  const [mobile, setMobile] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Image src="/images/header-logo.png" width={92} height={62} alt="Header Logo" />
        {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
      </div>
      <div className={mobile ? `${styles.headerNav} ${styles.headerCont}` : styles.headerNav}>
        {headerNav?.map((item, index) => {
          return (
            <Link href={item.link} className={pathname === item.link ? styles.active : ""} key={index}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
