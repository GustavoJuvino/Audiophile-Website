"use client";
import React, { useState } from 'react';
import styles from "./Mobile.module.css";
import MobileMenu from "../MobileMenu";

const MobileButton = () => {
    const [active, setActive] = useState(false);
  return (
    <div className="md:hidden">
        <span
            id={styles.hamburger}
            className={active ? styles.active : ""}
            onClick={() => setActive(!active)}
        />
        <MobileMenu active={active} />
    </div>
  )
}

export default MobileButton;