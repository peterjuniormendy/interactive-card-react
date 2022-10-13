import React from "react";

const Input = ({ type, id, value, onChange, ...otherProps }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default Input;
