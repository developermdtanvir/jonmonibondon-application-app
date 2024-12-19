import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Application from "./Application/Application";
import ApplicationPrint from "./ApplicationPrint/ApplicationPrint";
import Navbar from "./components/Navbar/Navbar";
import Correction from "./Correction/Correction";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<App />} />
        <Route path="correction" element={<Correction />} />
        <Route path="application" element={<Application />} />
        <Route path="application/print" element={<ApplicationPrint />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
