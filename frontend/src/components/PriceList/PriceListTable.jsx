import { useState } from "react";
import { Plus, Printer, Sliders, Search } from "lucide-react";
import styles from "../../styles/PriceList/PriceListTable.module.css";

export default function PriceListTable() {
  const [articleSearch, setArticleSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");

  const columns = [
    { key: "id", label: "Article No" },
    { key: "product", label: "Product / Service" },
    { key: "inPrice", label: "In Price" },
    { key: "price", label: "Price" },
    { key: "unit", label: "Unit" },
    { key: "inStock", label: "In Stock" },
    {
      key: "description",
      label: "Description",
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

      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>
                <span>{col.label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {initialProducts.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.product}</td>
              <td>{row.inPrice}</td>
              <td>{row.price}</td>
              <td>{row.unit}</td>
              <td>
                <span>{row.inStock}</span>
              </td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
