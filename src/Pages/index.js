import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home/";
function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.path}>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default Pages;
