import { useState } from "react";
import LanguageSelect from "../LanguageSelect";

export default function PriceListHeader() {
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
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <div className="navbar-left">
            <button className={`hamburger-btn`}>
              <span />
              <span />
              <span />
            </button>

            <div className="avatar">AL</div>
            <div className="user-info">
              <span className="user-name">Alexandra Lee</span>
              <span className="user-role">Product Manager</span>
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
