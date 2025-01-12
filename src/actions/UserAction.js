import axios from "axios";
import { CLEAR_ERRORS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/UserConstant"

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

export const registerUser=(userData)=>async(dispatch)=>{
   try {
       dispatch({type:REGISTER_USER_REQUEST});

       const config = {
         headers:{
            "Content-Type":"multipart/form-data"
         }
       }

       const {data} = await axios.post('https://shopsy-server.onrender.com/api/v1/register',userData,config);

        dispatch({
            type:REGISTER_USER_SUCCESS,
            payload:data.user
        })
   } catch (error) {
      dispatch({
        type:REGISTER_USER_FAIL,
        payload:error.response.data.message
      })
   }
}

export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS});
}