import { useState } from "react";
import {
  Plus,
  Printer,
  Sliders,
  Search,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  MoveRight,
} from "lucide-react";
import styles from "../../styles/PriceList/PriceListTable.module.css";

export default function PriceListTable() {
  const [articleSearch, setArticleSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      key: "arrow-indicator",
      label: "",
      sortColor: "#78e2e1",
      cssClass: "arrow-indicator",
    },
    { key: "id", label: "Article No", sortColor: "#78e2e1" },
    { key: "product", label: "Product / Service", sortColor: "#85E196" },
    {
      key: "inPrice",
      label: "In Price",
      sortColor: "#78e2e1",
      cssClass: "col-inprice",
    },
    { key: "price", label: "Price", sortColor: "#85E196" },
    { key: "unit", label: "Unit", sortColor: "#78e2e1" },
    { key: "inStock", label: "In Stock", sortColor: "#85E196" },
    {
      key: "description",
      label: "Description",
      sortColor: "#78e2e1",
      cssClass: "col-description",
    },
  ];
  const initialProducts = [
    {
      id: "A001",
      product: "Wireless Headphones",
      inPrice: 80.0,
      price: 149.99,
      unit: "pcs",
      inStock: 42,
      description: "Over-ear noise cancelling",
    },
    {
      id: "A002",
      product: "Ergonomic Chair",
      inPrice: 210.0,
      price: 599.0,
      unit: "pcs",
      inStock: 8,
      description: "Lumbar support, adjustable",
    },
    {
      id: "A003",
      product: "Mechanical Keyboard",
      inPrice: 55.0,
      price: 189.5,
      unit: "pcs",
      inStock: 3,
      description: "TKL, Cherry MX switches",
    },
    {
      id: "A004",
      product: "USB-C Hub 7-in-1",
      inPrice: 18.0,
      price: 59.99,
      unit: "pcs",
      inStock: 120,
      description: "HDMI, USB3, SD card",
    },
    {
      id: "A005",
      product: "Desk LED Lamp",
      inPrice: 22.0,
      price: 74.95,
      unit: "pcs",
      inStock: 56,
      description: "Touch dimmer, 3 color modes",
    },
    {
      id: "A006",
      product: "Bamboo Monitor Stand",
      inPrice: 14.0,
      price: 45.0,
      unit: "pcs",
      inStock: 29,
      description: "Natural bamboo finish",
    },
    {
      id: "A007",
      product: "Noise-Cancel Earbuds",
      inPrice: 60.0,
      price: 179.0,
      unit: "pcs",
      inStock: 18,
      description: "IPX5, 30hr battery",
    },
    {
      id: "A008",
      product: "Standing Desk Mat",
      inPrice: 25.0,
      price: 79.0,
      unit: "pcs",
      inStock: 0,
      description: "Anti-fatigue, beveled edge",
    },
  ];

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (key, color) => {
    if (sortKey !== key || key === "arrow-indicator")
      return <ArrowUp size={24} className={styles["sort-icon-hidden"]} />;
    return sortDirection === "asc" ? (
      <ArrowUp size={24} color={color} className={styles["sort-icon-active"]} />
    ) : (
      <ArrowDown
        size={24}
        color={color}
        className={styles["sort-icon-active"]}
      />
    );
  };

  return (
    <div className={styles.body}>
      <div className={styles.toolbar}>
        <div className={styles["search-group"]}>
          <div className={styles["search-bar"]}>
            <input
              type="text"
              placeholder="Search Article No..."
              value={articleSearch}
              onChange={(e) => setArticleSearch(e.target.value)}
            />
            <button className={styles["button-search"]}>
              <Search color="#9fdad8" />
            </button>
          </div>
          <div className={styles["search-bar"]}>
            <input
              type="text"
              placeholder="Search Product…"
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
            />
            <button className={styles["button-search"]}>
              <Search color="#9fdad8" />
            </button>
          </div>
        </div>

        <div className={styles["button-group"]}>
          <button className={styles.button}>
            <span className={styles["button-label"]}>New Product</span>
            <Plus color="#4ff1a8" strokeWidth="3" size={16} />
          </button>
          <button className={styles.button}>
            <span className={styles["button-label"]}>Print List</span>
            <Printer color="#6bf1f2" size={16} />
          </button>
          <button className={styles.button}>
            <span className={styles["button-label"]}>Advanced Mode</span>
            <Sliders color="#52cddb" size={16} />
          </button>
        </div>
      </div>

      <div className={styles["table-wrapper"]}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`${styles["table-header"]} ${styles[col.cssClass]}`}
                  onClick={() => handleSort(col.key)}
                >
                  <span className={styles["table-header-inner"]}>
                    {col.label}
                    {getSortIcon(col.key, col.sortColor)}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {initialProducts.map((row) => (
              <tr
                key={row.id}
                className={styles.row}
                onClick={() => setSelectedRow(row.id)}
              >
                {
                  <td className={styles["row-indicator"]}>
                    <MoveRight
                      size={18}
                      className={`${styles["inactive-row"]} ${selectedRow == row.id ? styles["selected-row"] : ""}`}
                    />
                  </td>
                }
                <td className={styles["table-data"]}>{row.id}</td>
                <td className={styles["table-data"]}>{row.product}</td>
                <td
                  className={`${styles["table-data"]} ${styles["col-inprice"]}`}
                >
                  {row.inPrice}
                </td>
                <td className={styles["table-data"]}>{row.price}</td>
                <td className={styles["table-data"]}>{row.unit}</td>
                <td className={styles["table-data"]}>{row.inStock}</td>
                <td
                  className={`${styles["table-data"]} ${styles["col-description"]}`}
                >
                  {row.description}
                </td>
                <td className={`${styles["column-actions"]}`}>
                  <button className={styles["more-button"]}>
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
