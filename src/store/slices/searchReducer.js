import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearchTrue = createAction("SET_SEARCH_TRUE");
export const setSearchfalse = createAction("SET_SEARCH_FALSE");

const searchReducer = createReducer(false, {
  [setSearchTrue]: (state, action) => true,
  [setSearchfalse]: (state, action) => false,
});

export default searchReducer;
