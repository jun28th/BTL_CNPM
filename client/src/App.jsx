import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
