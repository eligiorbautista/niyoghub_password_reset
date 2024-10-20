import React from "react";

const PasswordResetConfirmation = () => {
    return (
        <div style={styles.container}>
            <div style={styles.outro}>
                <h2 style={styles.heading}>Password Changed Successfully</h2>
                <p style={styles.message}>
                    Your password has been successfully changed. You can now log in to the NiyogHub mobile or web app using your new password.
                </p>
                <p style={styles.message}>
                    Please make sure to keep your password secure and do not share it with anyone. If you encounter any issues logging in, feel free to contact our support team.
                </p>
                <p style={styles.info}>
                    Go ahead and continue your farming journey with NiyogHub!
                </p>
               
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "30px",
        maxWidth: "500px",
        margin: "50px auto",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    outro: {
        textAlign: "center",
    },
    heading: {
        fontSize: "24px",
        color: "#4CAF50",
        marginBottom: "20px",
    },
    message: {
        fontSize: "16px",
        color: "#555",
        marginBottom: "15px",
        lineHeight: "1.5",
    },
    info: {
        color: "#333",
        fontStyle: "italic",
        marginBottom: "20px",
    },
 
};

export default PasswordResetConfirmation;
