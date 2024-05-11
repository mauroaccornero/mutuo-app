import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAmortizationScheduleItem } from "../common/types";

export const AmortizationScheduleSlice = createSlice({
  name: "AmortizationSchedule",
  initialState: {
    value: [],
  },
  reducers: {
    setAmortizationSchedule: (
      state: { value: IAmortizationScheduleItem[] },
      action: PayloadAction<IAmortizationScheduleItem[]>,
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setAmortizationSchedule } = AmortizationScheduleSlice.actions;

export default AmortizationScheduleSlice.reducer;
