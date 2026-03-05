import "../../styles/Login/LoginFooter.css";

export default function Footer() {
  const footerLinks = ["Home", "Order", "Contact us"];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <span className="footer-brand">123 Fakturera</span>
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="footer-divider" />
        <p className="footer-copyright">
          © {new Date().getFullYear()} 123Fakturera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
