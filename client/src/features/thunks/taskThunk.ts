import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config/app";
import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "../../services/requests";

const taskAsyncThunk = {
  getTasks: createAsyncThunk("GET_TASKS", async () => {
    const url = `${config.app_url}/tasks`;
    return getRequest(url);
  }),
  createTask: createAsyncThunk("CREATE_TASKS", async (payload: any) => {
    const url = `${config.app_url}/tasks`;
    return postRequest(url, payload);
  }),
  updateTask: createAsyncThunk(
    "UPDATE_TASK",
    async (payload: { _id: number; title: string; description: string }) => {
      const url = `${config.app_url}/tasks/${payload._id}`;
      return patchRequest(url, payload);
    }
  ),
  deleteTask: createAsyncThunk(
    "DELETE_TASK",
    async (payload: { _id: number }) => {
      const url = `${config.app_url}/tasks/${payload._id}`;
      return deleteRequest(url);
    }
  ),
};

export default taskAsyncThunk;
