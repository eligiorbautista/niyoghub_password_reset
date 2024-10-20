import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ChangePassword.css";

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
                <div className="password-requirements">
                    <p>Passwords must contain:</p>
                    <ul>
                        <li>At least 6 characters</li>
                        <li>At least 1 uppercase letter (A-Z)</li>
                        <li>At least 1 lowercase letter (a-z)</li>
                        <li>At least 1 number (0-9)</li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
