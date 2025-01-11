import { ADMIN_PRODUCTS_FAIL, ADMIN_PRODUCTS_REQUEST, ADMIN_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, CLEAR_ERRORS, SLIDER_PRODUCTS_FAIL, SLIDER_PRODUCTS_REQUEST, SLIDER_PRODUCTS_SUCCESS } from "../constants/ProductConstant";

export const productsReducer = (state = { products: [] }, { type, payload }) => {
    switch (type) {
        case ALL_PRODUCTS_REQUEST:
        case ADMIN_PRODUCTS_REQUEST:
        case SLIDER_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: payload.products,
                productsCount: payload.productsCount,
                filteredProductsCount: payload.filteredProductsCount,
            }
        case ADMIN_PRODUCTS_SUCCESS:
        case SLIDER_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: payload
            }
        
        case ADMIN_PRODUCTS_FAIL:
        case SLIDER_PRODUCTS_FAIL:
        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                error:payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        default:
            return state;
    }
}