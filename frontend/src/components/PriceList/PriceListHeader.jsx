import { useState } from "react";
import LanguageSelect from "../LanguageSelect";
import styles from "../../styles/PriceList/PriceListHeader.module.css";

export default function PriceListHeader() {
  return (
    <>
      <header className={styles.navbar}>
        <div className="navbar-inner">
          <div className={styles["navbar-left"]}>
            <button className={`hamburger-btn`}>
              <span />
              <span />
              <span />
            </button>

            <div className="avatar">AL</div>
            <div className={styles["user-info"]}>
              <span>Alexandra Lee</span>
              <span>Product Manager</span>
            </div>
          </div>
          <div className="navbar-right">
            <LanguageSelect />
          </div>
        </div>
      </header>
    </>
  );
}
