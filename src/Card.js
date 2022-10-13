import React, { useState } from "react";

import Form from "./Form";
import ThankYouCard from "./ThankYouCard";
import TopLeftCard from "./TopLeftCard";

function Card() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCVC] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleCardNumber(event) {
    if (
      event.target.value.length === 4 ||
      event.target.value.length === 9 ||
      event.target.value.length === 14
    ) {
      event.target.value = event.target.value + " ";
    }
    setNumber(event.target.value);
  }

  function handleComfirmBtn(event) {
    event.preventDefault();
    setFormErrors(validate(name, number, month, year, cvc));
  }

  function validate(name, number, month, year, cvc) {
    const errors = {};
    if (!name) {
      errors.name = "Can't be blank";
    }

    if (!number) {
      errors.number = "Can't be blank";
    } else if (isNaN(Number(number.replace(/\s/g, "")))) {
      errors.number = "Wrong format, numbers only";
    }

    if (!month || !year) {
      errors.date = "Can't be black";
    } else if (isNaN(Number(month)) || isNaN(Number(year))) {
      errors.date = "Wrong format, numbers only";
    }

    if (!cvc) {
      errors.cvc = "Can't be blank";
    } else if (isNaN(Number(cvc))) {
      errors.cvc = "Wrong format, numbers only";
    }

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    }

    return errors;
  }

  function handleContinue() {
    setIsSubmit(false);
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
    setCVC("");
  }

  return (
    <div className="container">
      <TopLeftCard
        name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />
      <div className="right">
        {!isSubmit ? (
          <Form
            setName={setName}
            handleCardNumber={handleCardNumber}
            setMonth={setMonth}
            setYear={setYear}
            setCVC={setCVC}
            formErrors={formErrors}
            handleComfirmBtn={handleComfirmBtn}
          />
        ) : (
          <ThankYouCard handleContinue={handleContinue} />
        )}
      </div>
    </div>
  );
}

export default Card;
