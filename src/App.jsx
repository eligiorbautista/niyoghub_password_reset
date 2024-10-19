// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequestPasswordReset from "./components/RequestPasswordReset";
import ChangePassword from "./components/ChangePassword";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RequestPasswordReset />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
