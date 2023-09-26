import VendorActionTypes from "./vendor.types"


export const fetchAllVendorStart = () => {
    return ({
    type: VendorActionTypes.FETCH_ALL_VENDOR_START
})}
export const fetchAllVendorSuccess = (data) => ({
    type: VendorActionTypes.FETCH_ALL_VENDOR_SUCCESS,
    payload: data
})
export const fetchAllVendorFailure = errorMessage => ({
    type: VendorActionTypes.FETCH_ALL_VENDOR_FAILURE,
    payload: errorMessage
})
export const fetchSingleVendorStart = data => ({
    type: VendorActionTypes.FETCH_SINGLE_VENDOR_START,
    payload: data
})
export const fetchSingleVendorSuccess = (data) => ({
    type: VendorActionTypes.FETCH_SINGLE_VENDOR_SUCCESS,
    payload: data
})
export const fetchSingleVendorFailure = errorMessage => ({
    type: VendorActionTypes.FETCH_SINGLE_VENDOR_FAILURE,
    payload: errorMessage
})
export const fetchRecentAddedVendorStart = data => ({
    type: VendorActionTypes.FETCH_RECENT_ADDED_VENDOR_START,
    payload: data
})
export const fetchRecentAddedVendorSuccess = (data) => ({
    type: VendorActionTypes.FETCH_RECENT_ADDED_VENDOR_SUCCESS,
    payload: data
})
export const fetchRecentAddedVendorFailure = errorMessage => ({
    type: VendorActionTypes.FETCH_RECENT_ADDED_VENDOR_FAILURE,
    payload: errorMessage
})
export const fetchBestSellingVendorStart = data => ({
    type: VendorActionTypes.FETCH_BEST_SELLING_VENDOR_START,
    payload: data
})
export const fetchBestSellingVendorSuccess = (data) => ({
    type: VendorActionTypes.FETCH_BEST_SELLING_VENDOR_SUCCESS,
    payload: data
})
export const fetchBestSellingVendorFailure = errorMessage => ({
    type: VendorActionTypes.FETCH_BEST_SELLING_VENDOR_FAILURE,
    payload: errorMessage
})