import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config/app";
import axios from "axios";
import { deleteRequest, getRequest } from "../../services/requests";

const userAsyncThunk = {
  login: createAsyncThunk(
    "LOGIN",
    async (payload: { email: string; password: string }) => {
      const url = `${config.app_url}/login`;
      return axios.post(url, payload);
    }
  ),
  register: createAsyncThunk(
    "REGISTER",
    async (payload: { name: string; email: string; password: string }) => {
      const url = `${config.app_url}/register`;
      return axios.post(url, payload);
    }
  ),
  logout: createAsyncThunk("LOGOUT", async () => {
    const url = `${config.app_url}/logout`;
    return deleteRequest(url);
  }),
  user: createAsyncThunk("GET_USER_DATA", async () => {
    const url = `${config.app_url}/user`;
    return getRequest(url);
  }),
};

export default userAsyncThunk;
