import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import PasswordResetConfirmation from "./components/PasswordResetConfirmation";
import PageTitle from "./components/PageTitle";
import './App.css'
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" 
            element={
              <>
                <PageTitle title="Password Confirmation | NiyogHub" />
                <PasswordResetConfirmation />
              </>
            } 
          />
          <Route path="/change-password" 
            element={ 
              <>
                <PageTitle title="Reset Password | NiyogHub" />
                <ChangePassword />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
