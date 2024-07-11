import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import categoryReducer from "../category/categorySlice";
import productsReducer from "../products/productSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        category: categoryReducer,
        product: productsReducer,
    },

});

export type AppRootState=ReturnType<typeof store.getState > ;
export type AppDispatch = typeof store.dispatch;

export default store;