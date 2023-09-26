import ShopActionTypes from "./shop.types"


export const fetchAllVendorShopStart = () => ({
    type: ShopActionTypes.FETCH_ALL_VENDOR_SHOP_START
})
export const fetchAllVendorShopSuccess = (data) => ({
    type: ShopActionTypes.FETCH_ALL_VENDOR_SHOP_SUCCESS,
    payload: data
})
export const fetchAllVendorShopFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_ALL_VENDOR_SHOP_FAILURE,
    payload: errorMessage
})

export const fetchAllShopStart = () => ({
    type: ShopActionTypes.FETCH_ALL_SHOP_START
})
export const fetchAllShopSuccess = (data) => ({
    type: ShopActionTypes.FETCH_ALL_SHOP_SUCCESS,
    payload: data
})
export const fetchAllShopFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_ALL_SHOP_FAILURE,
    payload: errorMessage
})

export const fetchShopCategoriesStart = data => ({
    type: ShopActionTypes.FETCH_SHOP_CATEGORIES_START,
    payload: data
})
export const fetchShopCategoriesSuccess = (data) => ({
    type: ShopActionTypes.FETCH_SHOP_CATEGORIES_SUCCESS,
    payload: data
})
export const fetchShopCategoriesFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_SHOP_CATEGORIES_FAILURE,
    payload: errorMessage
})