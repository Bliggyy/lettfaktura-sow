import "./App.css";
import LoginPage from "./pages/LoginPage";
import PriceList from "./pages/PriceList";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pricelist" element={<PriceList />} />
      </Routes>
    </>
  );
}

export default App;
