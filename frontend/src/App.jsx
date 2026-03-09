import "./App.css";
import LoginPage from "./pages/LoginPage";
import PriceList from "./pages/PriceList";
import { Routes, Route } from "react-router";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <ProtectedRoute>
          <Route path="/pricelist" element={<PriceList />} />
        </ProtectedRoute>
      </Routes>
    </>
  );
}

export default App;
