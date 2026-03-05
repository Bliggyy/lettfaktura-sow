import { useState } from "react";
import "../../styles/Login/LoginHeader.css";
import { useClickAway } from "@uidotdev/usehooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [languageMenu, toggleLanguageMenu] = useState(false);

  const languageRef = useClickAway(() => {
    toggleLanguageMenu(false);
  });

  const navLinks = ["Home", "Order", "Our Customers", "About us", "Contact Us"];
  const supportedLanguages = [
    {
      language: "English",
      img: "https://storage.123fakturere.no/public/flags/GB.png",
    },
    {
      language: "Svenska",
      img: "https://storage.123fakturere.no/public/flags/SE.png",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
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
          >
            <span />
            <span />
            <span />
          </button>
          <div
            className="language-select"
            onClick={() => toggleLanguageMenu((prev) => !prev)}
            ref={languageRef}
          >
            <span>{language}</span>
            <img
              src={supportedLanguages.find((l) => l.language === language)?.img}
              alt={language}
            />
            {languageMenu && (
              <div className="language-dropdown">
                {supportedLanguages.map((lang) => (
                  <div
                    key={lang.language}
                    className="language-option"
                    onClick={() => {
                      setLanguage(lang.language);
                      setLangOpen(false);
                    }}
                  >
                    <span>{lang.language}</span>
                    <img src={lang.img} alt={lang.language} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={`navbar-dropdown ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link} href="#" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
