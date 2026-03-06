import { useRef, useState, useEffect } from "react";
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

export default function PriceListSidebar({
  drawerOpen,
  toggleDrawer,
  hamburgerRef,
}) {
  const [activeItem, setActiveItem] = useState("Price List");
  const sidebarRef = useRef(null);

  const sidebarItems = [
    { icon: <File color="#98fdfc" />, label: "Invoices" },
    { icon: <User color="#39f0c0" />, label: "Customers" },
    {
      icon: <Settings color="#c9f7f7" strokeWidth="3" />,
      label: "My Business",
    },
    { icon: <BookText color="#66dcf0" />, label: "Invoice Journal" },
    { icon: <Tag color="#f09e3b" />, label: "Price List" },
    { icon: <FileText color="#92e9f4" />, label: "Multiple Invoicing" },
    { icon: <CircleX color="#eb5997" />, label: "Unpaid Invoices" },
    { icon: <Tags color="#f7f09f" />, label: "Offer" },
    { icon: <ClipboardList color="#f7f09f" />, label: "Inventory Control" },
    {
      icon: <UserCheck color="#28a2f4" />,
      label: "Member Invoicing",
      style: "disabled",
    },
    {
      icon: <Import color="#91baeb" />,
      label: "Import/Export",
      style: "disabled",
    },
    { icon: <LogOut color="#caeae5" />, label: "Log out" },
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

        return (
          <div
            key={item.label}
            className={`${styles["nav-item"]} ${isDisabled ? styles.disabled : ""} ${isActive ? styles.active : ""}`}
            onClick={() => {
              setActiveItem(item.label);
              toggleDrawer(false);
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
