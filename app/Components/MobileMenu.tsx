"use client";
import React, { useState } from 'react';
import styles from "./Header/MobileMenu.module.css"

const MobileMenu = () => {
    const [active, setActive] = useState(false);

  return (
    <section>
        <div className={styles.mobileButton}>
            <span
                id={styles.hamburger}
                className={active ? styles.active : ""}
                onClick={() => setActive(!active)}
            />
        </div>
    </section>
  )
}

export default MobileMenu;