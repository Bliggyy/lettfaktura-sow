import { useState } from "react";
import LanguageSelect from "../LanguageSelect";
import styles from "../../styles/PriceList/PriceListHeader.module.css";
import avatar from "../../assets/avatar.png";

export default function PriceListHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className="navbar-inner">
        <div className={styles["navbar-left"]}>
          <button
            className={`${styles["hamburger"]} ${styles[menuOpen ? "open" : ""]}`}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={styles.avatar}>
            <img className={styles["avatar-image"]} src={avatar} />
          </div>
          <div className={styles["user-info-container"]}>
            <span className={styles.username}>Alexandra Lee</span>
            <span className={styles.designation}>Product Manager</span>
          </div>
        </div>
        <div className="navbar-right">
          <LanguageSelect />
        </div>
      </div>
    </header>
  );
}
