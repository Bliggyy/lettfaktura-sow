import { useState } from "react";

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
            <div className="language-dropdown">
              {supportedLanguages.map((lang) => (
                <div key={lang.language} className="language-option">
                  <span>{lang.language}</span>
                  <img src={lang.img} alt={lang.language} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
