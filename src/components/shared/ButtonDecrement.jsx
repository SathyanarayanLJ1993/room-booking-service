import React from "react";

const ButtonDecrement = ({ type, handleDecrement }) => {
  return (
    <>
      <button
        className="rounded-circle p-2"
        type={type}
        onClick={handleDecrement}
      >
        <i className="fa fa-minus"></i>
      </button>
    </>
  );
};

export default ButtonDecrement;
