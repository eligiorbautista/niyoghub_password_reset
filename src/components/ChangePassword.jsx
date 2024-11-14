import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ChangePassword.css";
import logoImage from "../assets/black.png";

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

        try {
            const response = await fetch(
                `https://niyoghub-server.onrender.com/api/auth/reset-password/${token}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        newPassword,
                        confirmNewPassword,
                    }),
                }
            );

            const result = await response.json();

            setLoading(false);

            if (response.status === 200) {
                setSuccessMessage("Password reset successfully.");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else if (response.status === 400) {
                setErrorMessage(result.error || "Bad request. Please check the input.");
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div
          className="flex flex-col h-screen p-0 items-center"
          style={{ 
              backgroundImage: "url('src/assets/bck-opac.png')", 
              backgroundSize: 'auto 70%',
              backgroundPosition: 'right bottom', 
              backgroundRepeat: 'no-repeat'
          }}
        >
          <a className="fixed top-0 left-0 flex items-center space-x-3 rtl:space-x-reverse pr-15 mr-10 p-4">
            <img src={logoImage} className="h-8 ml-0 lg:ml-10 xl:ml-10" alt="NiyogHub Logo" />
            <span className="text-black font-bold self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
              NiyogHub
            </span>
          </a>
          
          <div className="change-password-container mt-20">
            <h1 className="text-xl font-bold text-center my-4">Reset Password</h1>
            <p className="text-center text-gray-600 text-sm mb-5">
              Please enter your desired new password to reset your account password.
            </p>
            <form onSubmit={handleChangePassword} className="w-[100%]">
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />

              <button 
                type="submit" 
                disabled={loading}
                style={{
                  backgroundColor: loading ? 'bg-[#537F19]' : 'bg-[#537F19]', // Gray when loading, blue otherwise
                  color: loading ? '#666' : '#fff',  
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s'
                }}
              >
                {loading ? "Changing..." : "Change Password"}
              </button>
              
              {errorMessage && <p className="error">{errorMessage}</p>}
              {successMessage && <p className="success">{successMessage}</p>}
              <div className="password-requirements">
                <p className="text-gray-600 text-s">Passwords must contain:</p>
                <ul className="text-center text-gray-600 text-xs">
                  <li>At least 6 characters</li>
                  <li>At least 1 uppercase letter (A-Z)</li>
                  <li>At least 1 lowercase letter (a-z)</li>
                  <li>At least 1 number (0-9)</li>
                </ul>
              </div>
            </form>
          </div>
      </div>
    );
};

export default ChangePassword;
