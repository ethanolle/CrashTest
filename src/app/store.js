import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import stringReducer from "../features/counter/stringSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    string: stringReducer,
  },
});
