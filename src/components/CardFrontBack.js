/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector } from "react-redux";

export default function CardFrontBack() {
  const cardholderName = useSelector((state) => state.cardForm.cardholderName);
  const cardNumber = useSelector((state) => state.cardForm.cardNumber);
  const month = useSelector((state) => state.cardForm.month);
  const year = useSelector((state) => state.cardForm.year);
  const cvc = useSelector((state) => state.cardForm.cvc);

  return (
    <div className="cardDiv">
      <div className="cardFrontDiv">
        <img
          src="/assets/card-logo.svg"
          alt="cardlogo"
          className="cardFrontLogo"
        />
        <div className="cardNoDiv">
          <span>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</span>
        </div>
        <div className="nameMonthYearDiv">
          <span className="holderName">
            {cardholderName ? cardholderName : "Jane Appleseed"}
          </span>
          <span className="monthYear">
            {month ? month : "00"}/{year ? year : "00"}
          </span>
        </div>
      </div>
      <div className="cardBackDiv">
        <span></span>
        <span className="cvc">{cvc ? cvc : "000"}</span>
      </div>
    </div>
  );
}
