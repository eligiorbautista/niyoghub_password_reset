import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChangePassword.css";

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
                `https://niyoghub-server.onrender.com/api/reset-password/${token}`,
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
            console.log("Response status:", response.status);
            console.log("Response data:", result);

            setLoading(false);

            if (response.status === 200) {
                setSuccessMessage("Password reset successfully.");
                console.log("Password reset successfully.");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else if (response.status === 400) {
                setErrorMessage(result.error || "Bad request. Please check the input.");
                console.log("Error message:", result.error);
            } else {
                // Handle other errors
                setErrorMessage("Something went wrong. Please try again.");
                console.log("Unexpected status code:", response.status);
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage("An unexpected error occurred. Please try again.");
            console.log("Error during password reset:", error);
        }
    };

    return (
        <div className="change-password-container">
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
                <label>New Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Changing..." : "Change Password"}
                </button>
                {errorMessage && <p className="error">{errorMessage}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
            </form>
        </div>
    );
};

export default ChangePassword;
