import { createSelector } from "reselect";

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)

export const selectUserData = createSelector(
    [selectUser],
    (user) => user.userData
)
export const selectCurrentUserAddress = createSelector(
    [selectUser],
    (user) => user.curren_user_address
)
export const selectIsFetching = createSelector(
    [selectUser],
    (user) => user.isFetching
)
export const selectErrorMsg = createSelector(
    [selectUser],
    (user) => user.errorMessage
)
export const selectAlertMsg = createSelector(
    [selectUser],
    (user) => user.alertMessage
)