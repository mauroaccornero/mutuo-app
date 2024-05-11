import { configureStore } from "@reduxjs/toolkit";
import AmortizationScheduleReducer from "./amortizationScheduleSlice";

const store = configureStore({
  reducer: {
    amortizationSchedule: AmortizationScheduleReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
