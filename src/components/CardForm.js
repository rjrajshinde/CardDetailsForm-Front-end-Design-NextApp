import React from "react";

export default function CardForm() {
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
          />
        </div>

        <div className="field" data-error="false">
          <label htmlFor="fieldCardNumber">Card Number</label>
          <input
            type="text"
            name="num"
            id="fieldCardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            maxlength="19"
            className="input-valid"
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
                maxlength="2"
                className="input-valid"
              />
              <input
                type="text"
                name="year"
                id="year"
                placeholder="YY"
                maxlength="2"
                className="input-valid"
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
              maxlength="3"
              className="input-valid"
            />
          </div>
        </div>
        <input type="submit" value="Confirm" id="submitBtn" />
      </form>
    </div>
  );
}
