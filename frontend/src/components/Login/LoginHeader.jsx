import { useState } from "react";
import "../../styles/Login/LoginHeader.css";
import { useClickAway } from "@uidotdev/usehooks";
import LanguageSelect from "../LanguageSelect";
import { useTranslation } from "react-i18next";
import KEYS from "../../constants/translationKeys";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useClickAway(() => {
    setMenuOpen(false);
  });
  const { t } = useTranslation();
  const navLinks = [
    t(KEYS.LOGIN.HEADER.HOME),
    t(KEYS.LOGIN.HEADER.ORDER),
    t(KEYS.LOGIN.HEADER.OUR_CUSTOMERS),
    t(KEYS.LOGIN.HEADER.ABOUT_US),
    t(KEYS.LOGIN.HEADER.CONTACT_US),
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img
            className="navbar-logo-image"
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="logo"
          />
        </a>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        <div className="navbar-right">
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            ref={hamburgerRef}
          >
            <span />
            <span />
            <span />
          </button>
          <div
            className={`navbar-dropdown ${menuOpen ? "open" : ""}`}
            style={{ height: menuOpen ? 345 : 0 }}
          >
            {navLinks.map((link) => (
              <a key={link} href="#" onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            ))}
          </div>
          <LanguageSelect />
        </div>
      </div>
    </nav>
  );
}
