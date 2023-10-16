import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Header from "./components/header/Header";
import TopSection from "./components/body/topSection/TopSection";
import MiddleSection from "./components/body/middleSection/MiddleSection";
import Footer from "./components/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <TopSection />
    <MiddleSection />
    <Footer />
  </React.StrictMode>
);
