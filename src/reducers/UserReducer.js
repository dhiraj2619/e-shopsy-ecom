import { CLEAR_ERRORS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/UserConstant";

export const userReducer = (state = { user: [] }, { type, payload }) => {

    switch (type) {
        case LOGIN_USER_REQUEST:
        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case LOGIN_USER_SUCCESS:
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: payload
            }
        case LOGIN_USER_FAIL:
        case REGISTER_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error:payload
            }
        case LOGOUT_USER_SUCCESS:
            return{
                 ...state,
                 loading:false,
                 isAuthenticated:false
            }
        case LOGOUT_USER_FAIL:
            return{
                 ...state,
                 loading:false,
                 error:payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }
        default:
            return state;
    }
}