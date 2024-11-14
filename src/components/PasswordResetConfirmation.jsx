import React from "react";
import logoImage from "../assets/black.png";

const PasswordResetConfirmation = () => {
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

          <div className="flex justify-center items-center h-screen p-5">
              <div className="p-8 max-w-lg mx-auto rounded-lg bg-[#FAFAFA] shadow-lg text-center font-sans">
                <div className="text-center">
                    <h2 className="text-[#537F19] text-xl mb-5 font-bold">Password Changed Successfully</h2>
                    <p className="text-base text-gray-600 mb-4 leading-6">
                        Your password has been successfully changed. You can now log in to the NiyogHub mobile or web app using your new password.
                    </p>
                    <p className="text-base text-gray-600 mb-4 leading-6">
                        Please make sure to keep your password secure and do not share it with anyone. If you encounter any issues logging in, feel free to contact our support team.
                    </p>
                    <p className="text-gray-800 italic mb-5">
                        Go ahead and continue your farming journey with NiyogHub!
                    </p>

                </div>
            </div>
          </div> 
        </div>
    );
};

export default PasswordResetConfirmation;
