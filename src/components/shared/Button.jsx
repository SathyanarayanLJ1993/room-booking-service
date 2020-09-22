import React from "react";

const Button = ({ type, className, buttonValuehandler, icon, disabled }) => {
  return (
    <>
      <button
        className={`${className} rounded-circle  text-white border border-white`}
        type={type}
        onClick={buttonValuehandler}
        disabled={disabled}
      >
        <i className={icon}></i>
      </button>
    </>
  );
};

export default Button;
