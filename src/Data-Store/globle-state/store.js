import { configureStore } from "@reduxjs/toolkit";
import DataCardUsingReducuer from './DataCardUsing';
import OrderListReducer from './OrderList';
import ProductReducer from './ProductData';

const rootReducers = {
    productData: ProductReducer,
    DataCardUsing: DataCardUsingReducuer,
    OrderListStore: OrderListReducer,
}

const Store = configureStore({
    reducer: rootReducers,
})
export default Store;