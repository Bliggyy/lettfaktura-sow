import { useState } from "react";
import "../styles/Login/LoginHeader.css";
import { useClickAway } from "@uidotdev/usehooks";

export default function Navbar() {
  const [language, setLanguage] = useState("English");
  const [languageMenu, toggleLanguageMenu] = useState(false);

  const languageRef = useClickAway(() => {
    toggleLanguageMenu(false);
  });
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
              }}
            >
              <span>{lang.language}</span>
              <img src={lang.img} alt={lang.language} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
