import React from "react";

const Button = ({ type, onClick, children }) => {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
