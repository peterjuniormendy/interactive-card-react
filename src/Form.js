import React from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const Form = ({
  formErrors,
  setName,
  setMonth,
  setYear,
  setCVC,
  handleCardNumber,
  handleComfirmBtn,
}) => {
  return (
    <form>
      <div className="form-group">
        <Label id="name" text="cardholder name" />
        <Input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value.toUpperCase())}
          placeholder="e.g. Jean Appleseed"
          className={formErrors.name ? "red" : ""}
        />
        <p className="error">{formErrors.name}</p>
      </div>
      <div className="form-group">
        <Label id="number" text="card number" />
        <Input
          type="text"
          id="number"
          maxLength="19"
          onChange={handleCardNumber}
          placeholder="e.g. 1234 5678 9123 0000"
          className={formErrors.number ? "red" : ""}
        />
        <p className="error">{formErrors.number}</p>
      </div>
      <div className="flex">
        <div className="form-group exp-date-group">
          <Label id="date" text="exp. date (MM/YY)" />
          <div className="flex form-date-group">
            <Input
              type="text"
              id="date"
              onChange={(e) => setMonth(e.target.value)}
              placeholder="MM"
              className={formErrors.date ? "red" : ""}
            />

            <Input
              type="text"
              id="year"
              onChange={(e) =>
                setYear(e.target.value.split("").splice(2).join(""))
              }
              placeholder="YY"
              className={formErrors.date ? "red" : ""}
            />
          </div>
          <p className="error">{formErrors.date}</p>
        </div>
        <div className="form-group cvc-group">
          <Label id="cvc" text="cvc" />
          <Input
            type="text"
            id="cvc"
            onChange={(e) => setCVC(e.target.value)}
            placeholder="e.g. 123"
            className={formErrors.cvc ? "red" : ""}
          />
          <p className="error">{formErrors.cvc}</p>
        </div>
      </div>
      <Button type="submit" onClick={handleComfirmBtn} children="comfirm" />
    </form>
  );
};

export default Form;
