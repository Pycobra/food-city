import {combineReducers} from "redux"
import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import shopReducer from "./shop/shop.reducer"
import accordionReducer from "./accordion/accordion.reducer"
import checkoutReducer from "./checkout/checkout.reducer"
// import adminReducer from "./admin/admin.reducer"
import vendorReducer from "./vendor/vendor.reducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"



const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart',]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    shop: shopReducer,
    accordion: accordionReducer,
    // firebase: firebaseReducer,

    vendor: vendorReducer,
})

export default persistReducer(persistConfig, rootReducer);




