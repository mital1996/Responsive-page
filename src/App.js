import React from "react";
import About from "./About/About";
import GetInvolved from "./GetInvolved/GetInvolved";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/about/get-involved" element={<GetInvolved />} />
      <Route path="*" element={<Navigate replace to="/about" />} />
    </Routes>
  );
}

export default App;
