import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../feature/product/productSlice.js";
import cartReducer from "../feature/cart/cartSlice.js";

const store = configureStore({
  reducer: { product: productReducer, cart: cartReducer },
});

export default store;
