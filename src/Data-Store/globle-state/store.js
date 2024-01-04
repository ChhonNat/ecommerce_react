import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductData';
const rootReducers = {
    productData: ProductReducer,
}

const Store = configureStore({
    reducer: rootReducers,
})
export default Store;