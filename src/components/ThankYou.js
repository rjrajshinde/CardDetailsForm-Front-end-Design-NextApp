/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { cardformActions } from "@/store/cardform-slice";

export default function ThankYou() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cardformActions.updateIsSubmitValue());
  };

  return (
    <div className="thankYouDiv">
      <div className="subThankYouDiv">
        <img
          className="thankYouImg"
          src="/assets/icon-complete.svg"
          alt="trueSign"
        />
        <h3 className="thankYouHeading">THANK YOU!</h3>
        <span className="thankYouText">{`We've added your card details`}</span>
      </div>
      <Link
        className="thankYouBtn"
        id="submitBtn"
        href="/"
        onClick={handleClick}
      >
        Continue
      </Link>
      {/* <a className="thankYouBtn" id="submitBtn" href="/">
        Continue
      </a> */}
    </div>
  );
}
