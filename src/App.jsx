import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import PasswordResetConfirmation from "./components/PasswordResetConfirmation";
import './App.css'
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PasswordResetConfirmation />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
