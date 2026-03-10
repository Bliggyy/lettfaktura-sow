import { use, useEffect, useState } from "react";
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
import api from "../../api/axios.js";
import { useTranslation } from "react-i18next";
import KEYS from "../../constants/translationKeys";

export default function PriceListTable() {
  const [pricelistData, setPricelistData] = useState([]);
  const [articleSearch, setArticleSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedRow, setSelectedRow] = useState(null);
  const [editedRows, setEditedRows] = useState({});
  const { t } = useTranslation();

  const columns = [
    {
      key: "arrow-indicator",
      label: "",
      sortColor: "#78e2e1",
      cssClass: "arrow-indicator",
    },
    {
      key: "id",
      label: t(KEYS.PRICELIST.TABLE.ARTICLE_NO),
      sortColor: "#78e2e1",
      cssClass: "col-article",
    },
    {
      key: "product",
      label: t(KEYS.PRICELIST.TABLE.PRODUCT),
      sortColor: "#85E196",
      cssClass: "col-product",
    },
    {
      key: "inPrice",
      label: t(KEYS.PRICELIST.TABLE.IN_PRICE),
      sortColor: "#78e2e1",
      cssClass: "col-inprice",
    },
    {
      key: "price",
      label: t(KEYS.PRICELIST.TABLE.PRICE),
      sortColor: "#85E196",
      cssClass: "col-price",
    },
    { key: "unit", label: "Unit", sortColor: "#78e2e1", cssClass: "col-unit" },
    {
      key: "inStock",
      label: t(KEYS.PRICELIST.TABLE.IN_STOCK),
      sortColor: "#85E196",
      cssClass: "col-instock",
    },
    {
      key: "description",
      label: t(KEYS.PRICELIST.TABLE.DESCRIPTION),
      sortColor: "#78e2e1",
      cssClass: "col-description",
    },
    {
      key: "extra",
      label: "",
      sortColor: "#78e2e1",
      cssClass: "col-extra",
    },
  ];

  useEffect(() => {
    const fetchPricelist = async () => {
      const response = await api.get("/api/pricelist");
      setPricelistData(response.data);
    };

    fetchPricelist();
  }, []);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const handleFieldChange = (rowId, field, value) => {
    setEditedRows((prev) => ({
      [rowId]: {
        ...prev[rowId],
        [field]: value,
      },
    }));
  };

  const handleSave = async (rowId) => {
    const updatedFields = editedRows[rowId];

    if (!updatedFields) {
      return;
    }

    setPricelistData((prev) =>
      prev.map((item) =>
        item.id === rowId ? { ...item, ...updatedFields } : item,
      ),
    );
    await api.put(`/api/pricelist/${rowId}`, updatedFields);
    setEditedRows({});
  };

  const renderCell = (row, field, cssClass) => {
    const isSelected = selectedRow === row.id;
    const value = editedRows[row.id]?.[field] ?? row[field];
    const isLongField = field === "description";

    return (
      <td
        className={`${styles["table-data"]} ${cssClass ? styles[cssClass] : ""} ${isSelected ? styles["cell-selected"] : ""}`}
      >
        {isSelected ? (
          isLongField ? (
            <textarea
              className={styles["cell-textarea"]}
              value={value}
              onChange={(e) => handleFieldChange(row.id, field, e.target.value)}
              onClick={(e) => e.stopPropagation()}
              rows={3}
            />
          ) : (
            <input
              className={styles["cell-input"]}
              value={value}
              onChange={(e) => handleFieldChange(row.id, field, e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          )
        ) : (
          value
        )}
      </td>
    );
  };

  const getSortIcon = (key, color) => {
    if (sortKey !== key || ["arrow-indicator", "extra"].includes(key))
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

  const filteredProducts = pricelistData
    .filter(
      (item) =>
        item.articleNo.toLowerCase().includes(articleSearch.toLowerCase()) &&
        item.product.toLowerCase().includes(productSearch.toLowerCase()),
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      let va = a[sortKey],
        vb = b[sortKey];
      if (typeof va === "string") {
        va = va.toLowerCase();
        vb = vb.toLowerCase();
      }
      return sortDirection === "asc" ? (va > vb ? 1 : -1) : va < vb ? 1 : -1;
    });

  return (
    <div className={styles.body}>
      <div className={styles.toolbar}>
        <div className={styles["search-group"]}>
          <div className={styles["search-bar"]}>
            <input
              type="text"
              placeholder={t(KEYS.PRICELIST.TABLE.ARTICLE_NO_PLACEHOLDER)}
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
              placeholder={t(KEYS.PRICELIST.TABLE.PRODUCT_PLACEHOLDER)}
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
            <span className={styles["button-label"]}>
              {t(KEYS.PRICELIST.TABLE.NEW_PRODUCT)}
            </span>
            <Plus color="#4ff1a8" strokeWidth="3" size={21} />
          </button>
          <button className={styles.button}>
            <span className={styles["button-label"]}>
              {t(KEYS.PRICELIST.TABLE.PRINT_LIST)}
            </span>
            <Printer color="#6bf1f2" size={21} />
          </button>
          <button className={styles.button}>
            <span className={styles["button-label"]}>
              {t(KEYS.PRICELIST.TABLE.ADVANCED_MODE)}
            </span>
            <Sliders color="#52cddb" size={21} />
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
                  onClick={() =>
                    ["arrow-indicator", "extra"].includes(col.key)
                      ? ""
                      : handleSort(col.key)
                  }
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
            {filteredProducts.map((row) => (
              <tr
                key={row.id}
                className={styles.row}
                onClick={() =>
                  setSelectedRow((prev) => (prev === row.id ? null : row.id))
                }
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    handleSave(row.id);
                  }
                }}
              >
                {
                  <td className={styles["row-indicator"]}>
                    <MoveRight
                      size={18}
                      className={`${styles["inactive-row"]} ${selectedRow == row.id ? styles["selected-row"] : ""}`}
                    />
                  </td>
                }
                {renderCell(row, "articleNo", "col-article")}
                {renderCell(row, "product", "")}
                {renderCell(row, "inPrice", "col-inprice")}
                {renderCell(row, "price", "")}
                {renderCell(row, "unit", "col-unit")}
                {renderCell(row, "inStock", "col-instock")}
                {renderCell(row, "description", "col-description")}
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
