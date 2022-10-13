import React from "react";

import cardFront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
import cardLogo from "./images/card-logo.svg";

const TopLeftCard = ({ name, number, month, year, cvc }) => {
  return (
    <div className="left">
      <>
        <img src={cardFront} alt="card" className="cardFront" />
        <img src={cardLogo} alt="Logo" className="card-logo" />
        <p className="card-numbers">
          {number ? number : "0000 0000 0000 0000"}
        </p>
        <div className="name-and-date-wrapper flex">
          <p className="card-name">{name ? name : "Jean Appleseed"}</p>
          <p>
            <span>{month ? month : "00"}</span>/
            <span>{year ? year : "00"}</span>
          </p>
        </div>
      </>
      <>
        <img src={cardBack} alt="backgroung" className="cardBack" />
        <span className="cvc-holder">{cvc ? cvc : "000"}</span>
      </>
    </div>
  );
};

export default TopLeftCard;
