import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from 'redux-persist';
import { ProductDetailReducer, productsReducer } from "./reducers/ProductReducer";
import { profileReducer, userReducer } from "./reducers/UserReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "profile"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  profile: profileReducer,
  productDetails:ProductDetailReducer
});

const persistedReducer = persistReducer(persistConfig,rootReducer)

const initalState = {};

const middleware = [thunk];

const store = createStore(
    persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store)

export {store,persistor};
