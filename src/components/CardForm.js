import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardformActions } from "@/store/cardform-slice";

export default function CardForm() {
  const cardHolderNameValue = useSelector(
    (state) => state.cardForm.cardholderName
  );
  const dispatch = useDispatch();
  console.log(cardHolderNameValue);
  const changeCardHolderName = (e) => {
    dispatch(cardformActions.updateCardHolderName(e.target.value));
  };
  const changeCardNumber = (e) => {
    const value = e.target.value;
    const onlyDigits = value.replace(/\s/g, "").replace(/\D/g, "");
    const formattedValue = onlyDigits.replace(/(\d{4})/g, "$1 ");
    dispatch(cardformActions.updateCardNumber(formattedValue));
  };
  const changeMonth = (e) => {
    dispatch(cardformActions.updateMonth(e.target.value));
  };
  const changeYear = (e) => {
    dispatch(cardformActions.updateYear(e.target.value));
  };
  const changeCvc = (e) => {
    dispatch(cardformActions.updateCvc(e.target.value));
  };

  return (
    <div className="cardFormDiv">
      <form action="#" method="post" className="form">
        <div className="field" data-error="false">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            name="name"
            id="cardholderName"
            placeholder="e.g. Jane Appleseed"
            className="input-valid"
            onChange={changeCardHolderName}
          />
        </div>

        <div className="field" data-error="false">
          <label htmlFor="fieldCardNumber">Card Number</label>
          <input
            type="text"
            name="num"
            id="fieldCardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="16"
            className="input-valid"
            onChange={changeCardNumber}
          />
        </div>
        <div className="field-container">
          <div className="field" data-error="false">
            <label htmlFor="month">Exp. Date (MM/YY)</label>
            <div>
              <input
                type="text"
                name="month"
                id="month"
                placeholder="MM"
                maxLength="2"
                className="input-valid"
                onChange={changeMonth}
              />
              <input
                type="text"
                name="year"
                id="year"
                placeholder="YY"
                maxLength="2"
                className="input-valid"
                onChange={changeYear}
              />
            </div>
          </div>
          <div className="field" data-error="false">
            <label htmlFor="fieldCardCvc">CVC</label>
            <input
              type="text"
              name="cvc"
              id="fieldCardCvc"
              placeholder=" e.g. 123"
              maxLength="3"
              className="input-valid"
              onChange={changeCvc}
            />
          </div>
        </div>
        <input type="submit" value="Confirm" id="submitBtn" />
      </form>
    </div>
  );
}
