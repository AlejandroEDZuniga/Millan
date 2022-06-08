import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { winesReducer } from "./slices/winesReducer";
import { authReducer } from "./slices/authReducer";
import { loggedUserReducer } from "./slices/loggedUserReducer";
import { usuariosReducer, loginReducer, tokenReducer } from "./slices/user";
import { adminReducer } from "./slices/adminReducer";

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
  },
});

export default store;
