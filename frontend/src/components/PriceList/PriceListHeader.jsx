import LanguageSelect from "../LanguageSelect";
import styles from "../../styles/PriceList/PriceListHeader.module.css";
import avatar from "../../assets/avatar.png";

export default function PriceListHeader({
  drawerOpen,
  toggleDrawer,
  hamburgerRef,
}) {
  return (
    <header className={styles.navbar}>
      <div className={styles["navbar-inner"]}>
        <div className={styles["navbar-left"]}>
          <button
            className={`${styles["hamburger"]} ${drawerOpen ? styles.open : ""}`}
            onClick={() => toggleDrawer()}
            ref={hamburgerRef}
            id="hamburgerButton"
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
