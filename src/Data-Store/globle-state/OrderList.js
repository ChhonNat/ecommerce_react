import { createSlice } from "@reduxjs/toolkit";

const defaulOrderList = [];

const OrderListReducer = createSlice({
    name: 'OrderList',
    initialState: defaulOrderList,
    reducers: {
        setOrderList: {
            reducer: (state, action) => {
                const storedData = localStorage.getItem('orderList');
                if (storedData) {
                    const parsedData = JSON.parse(storedData);
                    return [...state, ...parsedData];
                } else {
                    return [...state, {message: 'No data found in localStorage for key "orderList"'}];
                }
            },
        },
    },
});

export default OrderListReducer.reducer;
export const { setOrderList } = OrderListReducer.actions;