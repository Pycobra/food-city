import { createSelector } from "reselect";

const selectShop = state => state.shop

export const selectAllVendorShop = createSelector(
    [selectShop],
    (shop) => shop.all_vendor_shop
)
export const selectShopCategories = createSelector(
    [selectShop],
    (shop) => shop.shop_categories
)
export const selectSingleVendorShop = createSelector(
    [selectShop],
    (shop) => shop.single_vendor_shop
)
export const selectAllShop = createSelector(
    [selectShop],
    (shop) => shop.all_shop
)
export const selectSingleShop = createSelector(
    [selectShop],
    (shop) => shop.single_shop
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
)

