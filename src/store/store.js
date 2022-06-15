import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { winesReducer } from "./slices/winesReducer";
import { authReducer } from "./slices/authReducer";
import { loggedUserReducer } from "./slices/loggedUserReducer";
import { usuariosReducer, loginReducer, tokenReducer } from "./slices/user";
import { adminReducer } from "./slices/adminReducer";
import searchReducer from "./slices/searchReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    wines: winesReducer,
    token: tokenReducer,
    loggedUser: loggedUserReducer,
    isLogIn: authReducer,
    usuarios: usuariosReducer,
    login: loginReducer,
    admin: adminReducer,
    search: searchReducer
  },
});

export default store;
