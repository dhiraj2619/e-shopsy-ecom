import axios from "axios";
import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../constants/UserConstant"

export const LoginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_USER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }
        const { data } = await axios.post('https://shopsy-server.onrender.com/api/v1/login', { email, password }, config);

        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch(
            {
                type: LOGIN_USER_FAIL,
                payload: error.response.data.message
            })
    }
}