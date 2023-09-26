import { take, takeEvery, takeLatest, all, call, put } from "redux-saga/effects"
import VendorActionTypes from "./vendor.types"
import { 
    ApiGet_all_vendor,
    ApiGet_single_vendor,
    ApiGet_recent_added_vendor,
    ApiGet_best_selling_vendor
} from "../../utils/api/vendor-api.utils"
import {  
    fetchAllVendorSuccess, 
    fetchAllVendorFailure,
    fetchSingleVendorSuccess, 
    fetchSingleVendorFailure,
    fetchBestSellingVendorSuccess,
    fetchBestSellingVendorFailure,
    fetchRecentAddedVendorSuccess,
    fetchRecentAddedVendorFailure,
} from "./vendor.action"





class CustomError extends Error{
    constructor(msg){
        super();
        this.name = "";
        this.message= msg;
    }
}

export function* getAllVendor(){
    try{
        const response = yield ApiGet_all_vendor()
        if (response.message !== "Network Error"){
            yield put(fetchAllVendorSuccess(response))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchAllVendorFailure(error.message))
    }
}
export function* getRecentAddedVendor(){
    try{
        const response = yield ApiGet_recent_added_vendor()
        if (response.message !== "Network Error"){
            yield put(fetchRecentAddedVendorSuccess(response))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchRecentAddedVendorFailure(error.message))
    }
}
export function* getBestSellingVendor(){
    try{
        const response = yield ApiGet_best_selling_vendor()
        if (response.message !== "Network Error"){
            yield put(fetchBestSellingVendorSuccess(response))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchBestSellingVendorFailure(error.message))
    }
}
export function* getSingleVendor({payload}){
    try{
        const response = yield ApiGet_single_vendor(payload)
        if (response.message !== "Network Error"){
            yield put(fetchSingleVendorSuccess(response))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchSingleVendorFailure(error.message))
    }
}




export function* onFetchAllVendorStart() {
    yield takeLatest(VendorActionTypes.FETCH_ALL_VENDOR_START, 
        getAllVendor)
}
export function* onFetchSingleVendorStart() {
    yield takeLatest(VendorActionTypes.FETCH_SINGLE_VENDOR_START, 
        getSingleVendor)
}
export function* onFetchRecentAddedVendorStart() {
    yield takeLatest(VendorActionTypes.FETCH_RECENT_ADDED_VENDOR_START, 
        getRecentAddedVendor)
}
export function* onFetchBestSellingVendorStart() {
    yield takeLatest(VendorActionTypes.FETCH_BEST_SELLING_VENDOR_START, 
        getBestSellingVendor)
}
export function* vendorSagas() {
    yield all([
        call(onFetchAllVendorStart), 
        call(onFetchSingleVendorStart), 
        call(onFetchRecentAddedVendorStart), 
        call(onFetchBestSellingVendorStart), 
    ])
}

