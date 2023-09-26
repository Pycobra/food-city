import { createSelector } from "reselect";

const selectVendor = state => state.vendor

export const selectAllVendor = createSelector(
    [selectVendor],
    (vendor) => vendor.all_vendors
)
export const selectSingleVendor = createSelector(
    [selectVendor],
    (vendor) => vendor.single_vendor
)
export const selectRecentAddedVendor = createSelector(
    [selectVendor],
    (vendor) => vendor.recently_added
)
export const selectBestSellingVendor = createSelector(
    [selectVendor],
    (vendor) => vendor.best_selling
)
export const selectIsVendorFetching = createSelector(
    [selectVendor],
    (vendor) => vendor.isFetching
)



