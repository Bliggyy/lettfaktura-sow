import "./App.css";
import LoginPage from "./pages/LoginPage";
import PriceList from "./pages/PriceList";
import { Routes, Route } from "react-router";
import { ProtectedRoute } from "./components/ProtectedRoutes.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/pricelist"
          element={
            <ProtectedRoute>
              <PriceList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
