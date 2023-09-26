import { createSelector } from "reselect";

const selectCheckout = state => state.checkout

export const selectDeliveryOptions = createSelector(
    [selectCheckout],
    (checkout) => checkout.deliver_options
)

export const selectPaymentSelection = createSelector(
    [selectCheckout],
    (checkout) => checkout.payment_selection
)
export const selectAlertMessage = createSelector(
    [selectCheckout],
    (checkout) => checkout.alertMessage
)

export const selectIsFetching = createSelector(
    [selectCheckout],
    (checkout) => checkout.isFetching
)

export const selectPaystackPublicKey = createSelector(
    [selectCheckout],
    (checkout) => checkout.paystack_public_key
)

