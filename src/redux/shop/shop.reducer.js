import ShopActionTypes from "./shop.types"

const INITIAL_STATE = {
    all_shop: [],
    shop_categories: [],
    all_vendor_shop: [],
    isFetching: false,
    errorMessage: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {     
        case ShopActionTypes.FETCH_ALL_VENDOR_SHOP_START:
        case ShopActionTypes.FETCH_ALL_SHOP_START:
        case ShopActionTypes.FETCH_SHOP_CATEGORIES_START:
            return{
                ...state,
                isFetching: true,
            }    
        case ShopActionTypes.FETCH_ALL_SHOP_SUCCESS:
            return{
                ...state,
                errorMessage: null,
                isFetching: false,
                all_shop: action.payload
            }
        case ShopActionTypes.FETCH_ALL_VENDOR_SHOP_FAILURE:
        case ShopActionTypes.FETCH_ALL_SHOP_FAILURE:
        case ShopActionTypes.FETCH_SHOP_CATEGORIES_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }    
        case ShopActionTypes.FETCH_SHOP_CATEGORIES_SUCCESS:
            return{
                ...state,
                errorMessage: null,
                isFetching: false,
                shop_categories: action.payload
            }   
        case ShopActionTypes.FETCH_ALL_VENDOR_SHOP_SUCCESS:
            return{
                ...state,
                errorMessage: null,
                isFetching: false,
                all_vendor_shop: action.payload
            }
        default:
            return state
    }
}
 
export default shopReducer;