import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";

const getWines = createAsyncThunk("GET_WINES", () => {
  return axios
    .get("/api/wines/edit")
    .then((res) => res.data)
    .then((wines) => wines)
    .catch((error) => message.error(`Error: ${error.message}`, 5));
});

const addWine = createAsyncThunk("ADD_WINE", (data) => {
  console.log("que llegara aca", data)
  return axios
    .post("/api/wines/add", {
      brand: data.brand,
      varietal: data.varietal,
      harvest: parseInt(data.harvest),
      lotnumber: parseInt(data.lotnumber),
      exportbill: parseInt(data.exportbill),
      dispatchday: data.dispatchday,
      destiny: data.destiny,
    })
    .then((req) => req.body)
    .then((wines) => wines)
    .catch((error) => message.error(`Error: ${error.message}`, 5));
});
const getWine = createAsyncThunk("GET_WINE", (data) => {
  console.log("aca llega la data del componente HOME", data)
  console.log("este es el put numero", data.lotNumber)
  return axios.get(
    '/api/wines/',{
      params: {
      brand: data.brand,
      varietal: data.varietal,
      harvest: parseInt(data.harvest),
      lotnumber: parseInt(data.lotNumber),
      }
    })
    .then((res) => res.data)
    .then((wines) => wines)
    .catch((error) => message.error(`Error: ${error.message}`, 5));
});

const deleteWine = createAsyncThunk("DELETE_WINE", ({ id }) => {
  return axios.delete(`api/wines/${id}`).then((req) => req.body);
});

const editWine = createAsyncThunk("PUT_WINE", (data) => {
  const {
    id,
    brand,
    varietal,
    harvest,
    lotnumber,
    exportbill,
    dispatchday,
    destiny,
  } = data;

  // console.log("la data", data);

  return axios
    .put(`/api/wines/${id}`, {
      brand,
      varietal,
      harvest,
      lotnumber,
      exportbill,
      dispatchday,
      destiny,
    })
    .then((req) => req.body)
    .then((wines) => wines)
    .catch((error) => message.error(`Error: ${error.message}`, 5));
});

const winesReducer = createReducer([], {
  [getWines.fulfilled]: (state, action) => action.payload,

  [getWine.fulfilled]: (state, action) => action.payload,

  [addWine.fulfilled]: (state, action) => action.payload,

  [deleteWine.fulfilled]: (state, action) => action.payload,

  [editWine.fulfilled]: (state, action) => action.payload,
});

export { winesReducer, getWines, getWine,  addWine, deleteWine, editWine };
