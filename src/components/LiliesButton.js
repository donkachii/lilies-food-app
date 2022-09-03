import React from "react";


const LiliesButton = ({navigate, buttonName}) => {
  return (
    <>
      <button
        className="sign-up focus:ring-4 focus:outline-none"
        onClick={() => navigate("/signup")}
      >
        {buttonName}
      </button>
    </>
  );
};

export default LiliesButton;
