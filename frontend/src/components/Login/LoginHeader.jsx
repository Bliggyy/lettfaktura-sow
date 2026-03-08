import { useState } from "react";
import "../../styles/Login/LoginHeader.css";
import { useClickAway } from "@uidotdev/usehooks";
import LanguageSelect from "../LanguageSelect";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useClickAway(() => {
    setMenuOpen(false);
  });
  const navLinks = ["Home", "Order", "Our Customers", "About us", "Contact Us"];

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
