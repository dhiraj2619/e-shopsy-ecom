import axios from 'axios';

import { ALL_PRODUCTS_FAIL, ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, CLEAR_ERRORS, SLIDER_PRODUCTS_FAIL, SLIDER_PRODUCTS_REQUEST, SLIDER_PRODUCTS_SUCCESS } from "../constants/ProductConstant";

export const getProducts = (keyword = "", category, price = [0, 200000], currentPage = 1) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        let url = `/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&page=${currentPage}`;

        if (category) {
            url = `/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&page=${currentPage}`;
        }

        const { data } = await axios.get(url);

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getSliderProducts = () => async (dispatch) => {
    try {
        dispatch({ type: SLIDER_PRODUCTS_REQUEST });

        const { data } = await axios.get('https://shopsy-server.onrender.com/api/v1/products/all');

        dispatch({
            type: SLIDER_PRODUCTS_SUCCESS,
            payload: data.products
        })
    } catch (error) {
        dispatch({
            type: SLIDER_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS});
}