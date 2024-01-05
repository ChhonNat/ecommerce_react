// DataCardUsingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const defaultDataCardUsing = {id: 0, qty: 0};

const DataCardUsingReducuer = createSlice({
  name: 'DataCardUsing',
  initialState: defaultDataCardUsing,
  reducers: {
    // Reducer function using prepare to set the payload as the state directly
    setDataCardUsing: {
      reducer: (state, action) => {
        return action.payload; // Set the state to the payload directly
      },
    },
  },
});

export const { setDataCardUsing } = DataCardUsingReducuer.actions;
export default DataCardUsingReducuer.reducer;
