import { createSlice } from "@reduxjs/toolkit";

const defaultOrderList = [];

const OrderListReducer = createSlice({
    name: 'OrderList',
    initialState: defaultOrderList,
    reducers: {
        setOrderList: {
            reducer: (state, action) => {
                const storedData = localStorage.getItem('orderList');
                if (storedData) {
                    const parsedData = JSON.parse(storedData);
                    parsedData.forEach((item) => {
                        // Check if the item's ID already exists in the state
                        const existingItemIndex = state.findIndex(existingItem => existingItem.id === item.id);
                        if (existingItemIndex === -1) {
                            state.push(item); // If ID doesn't exist, add the item to the state
                        } else {
                            state[existingItemIndex] = item; // Update the existing item with the same ID
                        }
                    });
                };
            },
        },
    },
});

export default OrderListReducer.reducer;
export const { setOrderList } = OrderListReducer.actions;
