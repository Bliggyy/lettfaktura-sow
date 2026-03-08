import { useState, useRef } from "react";
import {
  PriceListHeader,
  PriceListSidebar,
  PriceListTable,
} from "../components/PriceList";
import "../styles/PriceList/PriceList.css";

export default function PriceList() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const toggleDrawer = (value = null) => {
    if (value !== null) {
      setDrawerOpen(value);
      return;
    }

    setDrawerOpen((prev) => !prev);
  };

  return (
    <div className="pricelist">
      <PriceListHeader
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        hamburgerRef={hamburgerRef}
      />
      <div className="pricelist-container">
        <PriceListSidebar
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          hamburgerRef={hamburgerRef}
        />
        <PriceListTable />
      </div>
    </div>
  );
}
