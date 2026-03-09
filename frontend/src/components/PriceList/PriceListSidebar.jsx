import { useRef, useState, useEffect, useContext } from "react";
import styles from "../../styles/PriceList/PriceListSidebar.module.css";
import {
  File,
  User,
  Settings,
  BookText,
  Tag,
  FileText,
  CircleX,
  Tags,
  ClipboardList,
  UserCheck,
  Import,
  LogOut,
} from "lucide-react";
import api from "../../api/axios.js";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import KEYS from "../../constants/translationKeys";

export default function PriceListSidebar({
  drawerOpen,
  toggleDrawer,
  hamburgerRef,
}) {
  const [activeItem, setActiveItem] = useState("Price List");
  const sidebarRef = useRef(null);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = async () => {
    const response = await api.post("api/auth/logout");

    if (response.data.status == "Success") {
      logout();
      navigate("/login");
    }
  };

  const sidebarItems = [
    {
      icon: <File color="#98fdfc" />,
      label: t(KEYS.PRICELIST.SIDEBAR.INVOICES),
    },
    {
      icon: <User color="#39f0c0" />,
      label: t(KEYS.PRICELIST.SIDEBAR.CUSTOMERS),
    },
    {
      icon: <Settings color="#c9f7f7" strokeWidth="3" />,
      label: t(KEYS.PRICELIST.SIDEBAR.MY_BUSINESS),
    },
    {
      icon: <BookText color="#66dcf0" />,
      label: t(KEYS.PRICELIST.SIDEBAR.INVOICE_JOURNAL),
    },
    {
      icon: <Tag color="#f09e3b" />,
      label: t(KEYS.PRICELIST.SIDEBAR.PRICE_LIST),
    },
    {
      icon: <FileText color="#92e9f4" />,
      label: t(KEYS.PRICELIST.SIDEBAR.MULTIPLE_INVOICING),
    },
    {
      icon: <CircleX color="#eb5997" />,
      label: t(KEYS.PRICELIST.SIDEBAR.UNPAID_INVOICES),
    },
    { icon: <Tags color="#f7f09f" />, label: t(KEYS.PRICELIST.SIDEBAR.OFFER) },
    {
      icon: <ClipboardList color="#f7f09f" />,
      label: t(KEYS.PRICELIST.SIDEBAR.INVENTORY_CONTROL),
    },
    {
      icon: <UserCheck color="#28a2f4" />,
      label: t(KEYS.PRICELIST.SIDEBAR.MEMBER_INVOICING),
      style: "disabled",
    },
    {
      icon: <Import color="#91baeb" />,
      label: t(KEYS.PRICELIST.SIDEBAR.IMPORT),
      style: "disabled",
    },
    {
      icon: <LogOut color="#caeae5" />,
      label: t(KEYS.PRICELIST.SIDEBAR.LOGOUT),
      action: handleLogout,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current?.contains(e.target)) return;
      if (hamburgerRef.current?.contains(e.target)) return;
      toggleDrawer(false);
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawerOpen]);

  return (
    <aside
      className={`${styles.sidebar} ${drawerOpen ? styles["drawer-open"] : ""}`}
      ref={sidebarRef}
    >
      <span className={styles["sidebar-section-label"]}>Menu</span>
      <hr className={styles["sidebar-divider"]} />
      {sidebarItems.map((item) => {
        const isActive = activeItem === item.label;
        const isDisabled = item.style === "disabled";
        const action = item.action || toggleDrawer;

        return (
          <div
            key={item.label}
            className={`${styles["nav-item"]} ${isDisabled ? styles.disabled : ""} ${isActive ? styles.active : ""}`}
            onClick={() => {
              action();
            }}
          >
            <div className={styles["icon-wrapper"]}>
              {isActive && <span className={styles["active-dot"]} />}
              {item.icon}
            </div>

            <span>{item.label}</span>
          </div>
        );
      })}
    </aside>
  );
}
