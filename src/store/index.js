import { configureStore } from "@reduxjs/toolkit";

import cardformSlice from "./cardform-slice";

const store = configureStore({
  reducer: {
    cardForm: cardformSlice.reducer,
  },
});

export default store;
