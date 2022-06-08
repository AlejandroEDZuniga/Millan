import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";

const addAdmin = createAsyncThunk("ADD_ADMIN", (data) => {
  return axios
    .post("/api/admin/addAdmin", {
      name: data.name,
      email: data.email,
      password: data.password,
    })
    .then((req) => req.body)
    .then((admin) => admin)
    .catch((error) => message.error(`Error: ${error.message}`, 5));
});

const deleteUser = createAsyncThunk("DELETE_USER", ({ id }) => {
  return axios.delete(`api/admin/${id}`).then((req) => req.body);
});

const getAllAdmins = createAsyncThunk("GET_ALL_ADMINS", () => {
  return axios
    .get("/api/admin")
    .then((res) => res.data)
    .then((admin) => admin)
    .catch((error) => message.error(`Error: ${error.message}`, 5));
});

const adminReducer = createReducer([], {
  [addAdmin.fulfilled]: (state, action) => action.payload,
  [getAllAdmins.fulfilled]: (state, action) => action.payload,
  [deleteUser.fulfilled]: (state, action) => action.payload,
});

export { adminReducer, addAdmin, getAllAdmins, deleteUser };
