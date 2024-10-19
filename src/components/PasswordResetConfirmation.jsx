// src/components/RequestPasswordReset.jsx
import React, { useState } from "react";
import axios from "axios";

const RequestPasswordReset = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleRequest = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const response = await axios.post(
                "https://niyoghub-server.onrender.com/api/auth/request-password-reset",
                { email }
            );

            setMessage(response.data.message);
        } catch (err) {
            setError(err.response?.data?.error || "Something went wrong. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h2>Request Password Reset</h2>
            <form onSubmit={handleRequest} style={styles.form}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Send Reset Link</button>
            </form>
            {message && <p style={styles.success}>{message}</p>}
            {error && <p style={styles.error}>{error}</p>}
        </div>
    );
};

const styles = {
    container: { padding: "20px", maxWidth: "400px", margin: "0 auto" },
    form: { display: "flex", flexDirection: "column", gap: "10px" },
    input: { padding: "8px", fontSize: "16px" },
    button: { padding: "10px", fontSize: "16px", cursor: "pointer" },
    success: { color: "green" },
    error: { color: "red" },
};

export default RequestPasswordReset;
