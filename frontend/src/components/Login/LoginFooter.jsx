import "../../styles/Login/LoginFooter.css";
import { useTranslation } from "react-i18next";
import KEYS from "../../constants/translationKeys";

export default function Footer() {
  const { t } = useTranslation();
  const footerLinks = [
    t(KEYS.LOGIN.FOOTER.HOME),
    t(KEYS.LOGIN.FOOTER.ORDER),
    t(KEYS.LOGIN.FOOTER.CONTACT_US),
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <span className="footer-brand">123 Fakturera</span>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="footer-copyright">
          © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
