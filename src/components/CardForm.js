import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardformActions } from "@/store/cardform-slice";
import { useForm } from "react-hook-form";

export default function CardForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "cardholderName") {
      value = value.toUpperCase();
    }
    if (name === "cardNumber") {
      const onlyDigits = value.replace(/\s/g, "").replace(/\D/g, "");
      value = onlyDigits.replace(/(\d{4})/g, "$1 ");
    }
    dispatch(cardformActions.updateInputValue({ fieldName: name, value }));
  };
  const isSubmit = useSelector((state) => state.cardForm.isSubmit);

  //! ONSUBMIT FUNCTION IF THERE IS NO ERROR THEN SET ISSUBMIT TRUE
  const onSubmit = (data) => {
    console.log(data);
    console.log(Object.keys(errors).length);
    if (Object.keys(errors).length === 0) {
      dispatch(cardformActions.setSubmitTrue());
    }

    console.log("isSubmit-----------" + isSubmit);
  };

  return (
    <div className="cardFormDiv">
      <form
        action=""
        method="post"
        className="form"
        onSubmit={handleSubmit((data) => onSubmit(data, errors))}
      >
        <div className="field">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            name="cardholderName"
            id="cardholderName"
            placeholder="e.g. John Doe"
            style={{ borderColor: errors.cardholderName && "red" }}
            className=""
            {...register("cardholderName", {
              required: "Can't be blank",
              minLength: {
                value: 3,
                message: "Holder Name must be at least 3 characters long",
              },
            })}
            onChange={handleInputChange}
          />
          {errors.cardholderName && (
            <span className="error">{errors.cardholderName.message}</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="fieldCardNumber">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="16"
            className=""
            style={{ borderColor: errors.cardNumber && "red" }}
            {...register("cardNumber", {
              required: "Can't be blank",
              // valueAsNumber: true,
              minLength: {
                value: 16,
                message: "Card Number must be 16 digits long",
              },
              maxLength: {
                value: 16,
                message: "Card Number must be 16 digits long",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "Card Number must be a Number",
              },
            })}
            onChange={handleInputChange}
          />
          {errors.cardNumber && (
            <span className="error">{errors.cardNumber.message}</span>
          )}
        </div>
        <div className="field-container">
          <div className="field">
            <label htmlFor="month">Exp. Date (MM/YY)</label>
            <div>
              <input
                type="number"
                name="month"
                id="month"
                placeholder="MM"
                style={{ borderColor: (errors.month || errors.year) && "red" }}
                {...register("month", {
                  required: "Can't be blank",
                  max: { value: 12, message: "Enter the correct Month" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Enter a valid month",
                  },
                })}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="year"
                id="year"
                style={{ borderColor: (errors.month || errors.year) && "red" }}
                {...register("year", {
                  required: "Can't be blank",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Enter a valid year",
                  },
                })}
                onChange={handleInputChange}
              />
            </div>

            {/* {errors.month ||
              (errors.year && (
                <span className="error">{`Can't be blank`}</span>
              ))} */}
            {errors.month || errors.year ? (
              errors.month?.message == "Enter the correct Month" ? (
                <span className="error">{`Enter a 12 month`}</span>
              ) : errors.month?.message == "Enter a valid year" ||
                errors.year?.message == "Enter a valid year" ? (
                <span className="error">{`Enter a valid year`}</span>
              ) : errors.month?.message == "Can't be blank" ||
                errors.year?.message == "Can't be blank" ? (
                <span className="error">{`Can't be blank`}</span>
              ) : (
                <span style={{ display: "none" }}></span>
              )
            ) : (
              <span style={{ display: "none" }}></span>
            )}
          </div>
          <div className="field">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              name="cvc"
              id="cvc"
              placeholder=" e.g. 123"
              maxLength="3"
              className=""
              style={{ borderColor: errors.cvc && "red" }}
              onChange={handleInputChange}
              {...register("cvc", {
                required: "Can't be blank",
                minLength: {
                  value: 3,
                  message: "Cvc must be 3 digits long",
                },
                maxLength: {
                  value: 3,
                  message: "Cvc must be 3 digits long",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Cvc must be a Number",
                },
              })}
            />
            {errors.cvc && <span className="error">{errors.cvc.message}</span>}
          </div>
        </div>
        <input
          type="submit"
          value="Confirm"
          id="submitBtn"
          // disabled={!isValid}
        />
      </form>
    </div>
  );
}
