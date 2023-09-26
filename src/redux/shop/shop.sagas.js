import { takeLatest, all, call, put } from "redux-saga/effects"
import VendorActionTypes from "./shop.types"
import { 
    ApiGet_all_shop,
    ApiGet_all_vendors_shop,
    ApiGet_shop_categories
} from "../../utils/api/shop-api.utils"
import {  
    fetchAllShopSuccess, 
    fetchAllShopFailure,
    fetchAllVendorShopSuccess, 
    fetchAllVendorShopFailure,
    fetchShopCategoriesSuccess, 
    fetchShopCategoriesFailure,
} from "./shop.action"




class CustomError extends Error{
    constructor(msg){
        super();
        this.name = "";
        this.message= msg;
    }
}

export function* getAllShop(){
    try{
        const response = yield ApiGet_all_shop()
        if (response.message !== "Network Error"){
            yield put(fetchAllShopSuccess(response))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchAllShopFailure(error.message))
    }
}


export function* getAllVendorsShop(){
    try{
        const response = yield ApiGet_all_vendors_shop()
        if (response.message !== "Network Error"){
            yield put(fetchAllVendorShopSuccess(response))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchAllVendorShopFailure(error.message))
    }
}


export function* getShopCategories({payload}){
    try{
        const response = yield ApiGet_shop_categories('vendor-shop', payload)
        if (response.message !== "Network Error"){
            yield put(fetchShopCategoriesSuccess(response))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchShopCategoriesFailure(error.message))
    }
}




export function* onFetchAllShopStart() {
    yield takeLatest(VendorActionTypes.FETCH_ALL_SHOP_START, 
        getAllShop)
}
export function* onFetchAllVendorsShopStart() {
    yield takeLatest(VendorActionTypes.FETCH_ALL_VENDOR_SHOP_START, 
        getAllVendorsShop)
}
export function* onFetchShopCategoriesShopStart() {
    yield takeLatest(VendorActionTypes.FETCH_SHOP_CATEGORIES_START, 
        getShopCategories)
}
export function* shopSagas() {
    yield all([
        call(onFetchAllShopStart), 
        call(onFetchAllVendorsShopStart), 
        call(onFetchShopCategoriesShopStart), 
        
    ])
}

