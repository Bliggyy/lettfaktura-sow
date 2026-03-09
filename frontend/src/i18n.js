import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  resources: {},
});

export default i18n;
