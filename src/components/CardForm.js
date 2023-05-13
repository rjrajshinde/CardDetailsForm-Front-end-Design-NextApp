import React from "react";

export default function CardForm() {
  return (
    <div className="cardFormDiv">
      <form action="" method="get" className="cardForm">
        <div className="formGroup">
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            name="cardName"
            id="cardName"
            placeholder="e.g. John Doe"
          />
        </div>
        <div className="formGroup">
          <label>CARD NUMBER</label>
          <input
            type="text"
            name="cardNo"
            id="cardNo"
            placeholder="e.g. 0000 0000 0000 0000"
          />
        </div>
        <div>
          <div className="formGroup">
            <div className="mmyycvv">
              <label>EXP. DATE (MM/YY)</label>
              <div>
                <input type="text" name="mm" id="mm" placeholder="MM" />
                <input type="text" name="yy" id="yy" placeholder="YY" />
              </div>
            </div>
          </div>
          <div className="cvvDiv">
            <label>CVV</label>
            <input type="text" name="cvv" id="cvv" placeholder="e.g. 123" />
          </div>
          <input type="submit" value="Confirm" className="submitBtn" />
        </div>
      </form>
    </div>
  );
}
