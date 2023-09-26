import VendorActionTypes from "./vendor.types"

const INITIAL_STATE = {
    all_vendors: [],
    single_vendor: null,
    recently_added: [],
    best_selling: [],
    isFetching: false,
    errorMessage: null,
}

const vendorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {      
        case VendorActionTypes.FETCH_ALL_VENDOR_START:
        case VendorActionTypes.FETCH_RECENT_ADDED_VENDOR_START:
        case VendorActionTypes.FETCH_BEST_SELLING_VENDOR_START:
        case VendorActionTypes.FETCH_SINGLE_VENDOR_START:
            return{
                ...state,
                isFetching: true,
            }      
        case VendorActionTypes.FETCH_ALL_VENDOR_SUCCESS:
            return{
                ...state,
                errorMessage: null,
                isFetching: false,
                all_vendors: action.payload
            }     
        case VendorActionTypes.FETCH_RECENT_ADDED_VENDOR_SUCCESS:
            return{
                ...state,
                errorMessage: null,
                isFetching: false,
                recently_added: action.payload
            }   
        case VendorActionTypes.FETCH_BEST_SELLING_VENDOR_SUCCESS:
            return{
                ...state,
                errorMessage: null,
                isFetching: false,
                best_selling: action.payload
            }  
        case VendorActionTypes.FETCH_SINGLE_VENDOR_SUCCESS:
            return{
                ...state,
                errorMessage: null,
                isFetching: false,
                single_vendor: action.payload
            }
        case VendorActionTypes.FETCH_ALL_VENDOR_FAILURE:
        case VendorActionTypes.FETCH_RECENT_ADDED_VENDOR_FAILURE:
        case VendorActionTypes.FETCH_BEST_SELLING_VENDOR_FAILURE:
        case VendorActionTypes.FETCH_SINGLE_VENDOR_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        
        default:
            return state
    }
}
 
export default vendorReducer;