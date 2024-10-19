import React from "react";

const PasswordResetConfirmation = () => {
    return (
        <div style={styles.container}>
            <div style={styles.outro}>
                <h2>Password Changed Successfully</h2>
                <p>
                    Your password has been successfully changed. You can now log in to the NiyogHub mobile or web app using your new password.
                </p>
                <p>
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
    container: { padding: "20px", maxWidth: "400px", margin: "0 auto", textAlign: "center" },
    outro: { textAlign: "center" },
    info: { color: "#333", fontStyle: "italic" }
};

export default PasswordResetConfirmation;
