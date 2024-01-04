import { createSlice } from "@reduxjs/toolkit";
import dataCard from "../card-data/dataCard";

const ProductReducer = createSlice({
    name: 'dataCard',
    initialState: dataCard,
    reducers: {}
});

export default ProductReducer.reducer;