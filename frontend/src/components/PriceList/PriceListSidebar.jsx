import { useState } from "react";
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

export default function PriceListSidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Price List");

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
    { icon: <LogOut color="#d5edeb" />, label: "Log out" },
  ];

  return (
    <aside className={`${styles.sidebar} ${drawerOpen ? "drawer-open" : ""}`}>
      <span className={styles["sidebar-section-label"]}>Menu</span>
      <hr className={styles["sidebar-divider"]} />
      {sidebarItems.map((item) => {
        const isActive = activeItem === item.label;
        const isDisabled = item.style === "disabled";

        return (
          <div
            key={item.label}
            className={`${styles["nav-item"]} ${isDisabled ? styles.disabled : ""} ${isActive ? styles.active : ""}`}
            onClick={() => setActiveItem(item.label)}
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
