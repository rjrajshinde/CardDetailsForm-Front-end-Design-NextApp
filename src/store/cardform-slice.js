import { createSlice } from "@reduxjs/toolkit";

const cardformSlice = createSlice({
  name: "cardform",
  initialState: {
    cardholderName: null,
    cardNumber: null,
    month: null,
    year: null,
    cvc: null,
  },
  reducers: {
    updateCardHolderName(state, action) {
      state.cardholderName = action.payload;
    },
    updateCardNumber(state, action) {
      state.cardNumber = action.payload;
    },
    updateMonth(state, action) {
      state.month = action.payload;
    },
    updateYear(state, action) {
      state.year = action.payload;
    },
    updateCvc(state, action) {
      state.cvc = action.payload;
    },
  },
});

export const cardformActions = cardformSlice.actions;

export default cardformSlice;
