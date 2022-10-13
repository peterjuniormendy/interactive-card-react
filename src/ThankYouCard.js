import React from "react";
import Button from "./Button";
import thanksIcon from "./images/icon-complete.svg";

const ThankYouCard = ({ handleContinue }) => {
  return (
    <div className="thank-you-card">
      <div className="wrapper">
        <img src={thanksIcon} alt="Thank you icon" />
        <h3>Thank you!</h3>
        <p className="message">We've added your card details</p>
        <Button onClick={handleContinue} children="continue" />
      </div>
    </div>
  );
};

export default ThankYouCard;
