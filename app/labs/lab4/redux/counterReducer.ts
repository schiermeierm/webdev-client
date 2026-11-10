import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 7 },
  reducers: {
    up: (state) => {
      state.count += 1;
    },
    down: (state) => {
      state.count -= 1;
    },
    // TODO (On your own): you can write your own reset reducer
    // With AI
    reset: (state) => {
      state.count = 7;
    },
  },
});

export const { up, down, reset } = counterSlice.actions;
export default counterSlice.reducer;
