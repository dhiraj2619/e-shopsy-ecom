import {applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { productsReducer } from "./reducers/ProductReducer";
import { userReducer } from "./reducers/UserReducer";

const reducer = combineReducers({
    products:productsReducer,
    user:userReducer
});

const initalState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;