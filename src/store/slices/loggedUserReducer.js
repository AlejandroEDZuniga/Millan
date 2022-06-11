import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setLogginFalse, setLogginTrue } from "./authReducer";
import { setToken } from "./user";

export const setUser = createAsyncThunk("SET_USER", async (data, thunkAPI) => {
  try {
    const token = localStorage.getItem("millanfamily");

    if (token) {
      const req = await axios.get(`/api/admin/logged`, {
        headers: { authorization: token },
      });

      thunkAPI.dispatch(setToken(token));
      thunkAPI.dispatch(setLogginTrue());

      return req.data;
    }
    return {};
  } catch (err) {
    throw err;
  }
});

export const setUserVoid = createAsyncThunk(
  "SET_USER_VOID",
  async (data, thunkAPI) => {
    try {
      await axios.get(`/api/auth/logout`);

      thunkAPI.dispatch(setToken(""));
      thunkAPI.dispatch(setLogginFalse());

      return {};
    } catch (err) {
      throw err;
    }
  }
);
export const loggedUserReducer = createReducer(
  {},
  {
    [setUser.fulfilled]: (state, action) => action.payload,
    [setUserVoid.fulfilled]: (state, action) => action.payload,
  }
);
