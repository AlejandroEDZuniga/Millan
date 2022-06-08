import { createAction, createReducer } from "@reduxjs/toolkit";

export const setLogginTrue = createAction("SET_LOG_IN_TRUE");
export const setLogginFalse = createAction("SET_LOG_IN_FALSE");

export const authReducer = createReducer(false, {
  [setLogginTrue]: (state, action) => true,
  [setLogginFalse]: (state, action) => false,
});

