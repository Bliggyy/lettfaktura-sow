import { useEffect, useState } from "react";
import "../styles/Login/LoginHeader.css";
import { useClickAway } from "@uidotdev/usehooks";
import api from "../api/axios.js";
import i18n from "../i18n.js";

export default function Navbar() {
  const [language, setLanguage] = useState("English");
  const [languageKey, setLanguageKey] = useState("en");
  const [languageMenu, toggleLanguageMenu] = useState(false);

  useEffect(() => {
    const loadTranslation = async () => {
      const response = await api.get(`/api/translate/${languageKey}`);
      i18n.addResourceBundle(languageKey, "translation", response.data);
      i18n.changeLanguage(languageKey);
      localStorage.setItem("lang", languageKey);
    };

    loadTranslation();
  }, [languageKey]);

  const languageRef = useClickAway(() => {
    toggleLanguageMenu(false);
  });
  const supportedLanguages = [
    {
      language: "English",
      key: "en",
      img: "https://storage.123fakturere.no/public/flags/GB.png",
    },
    {
      language: "Svenska",
      key: "sv",
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
                setLanguageKey(lang.key);
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
