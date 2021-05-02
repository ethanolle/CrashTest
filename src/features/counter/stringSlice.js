import { createSlice } from "@reduxjs/toolkit";

export const stringSlice = createSlice({
  name: "string",
  initialState: {
    value: "Test",
    arrayTest: ["this is the first in the array"],
    objectTest: { Ethan: "Le bg", Josh: "MonFrere" },
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
    addToArray: (state, action) => {
      state.arrayTest = [...state.arrayTest, action.payload];
    },
    addToObject: (state, action) => {
      state.objectTest = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, addToArray, addToObject } = stringSlice.actions;

export default stringSlice.reducer;
