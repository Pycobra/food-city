import { call, all } from "redux-saga/effects"
import { shopSagas } from "./shop/shop.sagas"
import { userSagas } from "./user/user.sagas"
import { cartSagas } from "./cart/cart.sagas"
import { CheckoutSagas } from "./checkout/checkout.sagas"
import { vendorSagas } from "./vendor/vendor.sagas"





export default function* rootSaga(){
    yield all([
        call(shopSagas), 
        call(userSagas), 
        call(cartSagas),
        call(CheckoutSagas),
        call(vendorSagas),
    ])
}
