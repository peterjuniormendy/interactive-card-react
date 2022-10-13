import React from "react";
import Form from "./Form";
import ThankYouCard from "./ThankYouCard";

const BottomRight = (
  isSubmit,
  setName,
  handleCardNumber,
  setMonth,
  setYear,
  setCVC
) => {
  return (
    <div className="right">
      {!isSubmit ? (
        <Form
          setName
          handleCardNumber
          setMonth
          setYear
          setCVC
          formErrors
          handleComfirmBtn
        />
      ) : (
        <ThankYouCard handleContinue />
      )}
    </div>
  );
};

export default BottomRight;
