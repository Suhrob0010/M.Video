import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducer/Counter/counter";
import counterBusket from "../reducer/CounterBusket/counterBusket";
import counterIzbranoe from "../reducer/CounterIzbranoe/izbranoe";


export const store = configureStore({
  reducer: {
    counter: counterSlice,
    busket: counterBusket,
    izbranoe: counterIzbranoe
  },
});
