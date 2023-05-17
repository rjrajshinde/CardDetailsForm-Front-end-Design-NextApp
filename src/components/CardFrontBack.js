/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function CardFrontBack() {
  return (
    <div className="cardDiv">
      <div className="cardFrontDiv">
        <img
          src="/assets/card-logo.svg"
          alt="cardlogo"
          className="cardFrontLogo"
        />
        <div className="cardNoDiv">
          <span>0000 0000 0000 0000</span>
        </div>
        <div className="nameMonthYearDiv">
          <span className="holderName">JANE APPLEASED</span>
          <span className="monthYear">00/00</span>
        </div>
      </div>
      <div className="cardBackDiv">
        <span></span>
        <span className="cvv">000</span>
      </div>
    </div>
  );
}
