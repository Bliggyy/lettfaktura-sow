import { PriceListHeader, PriceListSidebar } from "../components/PriceList";
import "../styles/PriceList/PriceList.css";

export default function PriceList() {
  return (
    <div className="pricelist">
      <PriceListHeader />
      <div>
        <PriceListSidebar />
      </div>
    </div>
  );
}
