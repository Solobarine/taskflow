import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import userAsyncThunk from "../thunks/userThunk";

interface UserInterface {
  isLoggedIn: boolean;
  loadingState: "idle" | "pending" | "failed";
  errorCode: undefined | string;
  user: any;
}

const initialState: UserInterface = {
  isLoggedIn: false,
  loadingState: "idle",
  errorCode: undefined,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userAsyncThunk.register.pending, (state) => {
      state.loadingState = "pending";
      state.errorCode = undefined;
    });
    builder.addCase(
      userAsyncThunk.register.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loadingState = "idle";
        state.errorCode = undefined;
        state.isLoggedIn = true;
        localStorage.setItem("auth_token", action.payload.data.token);
        window.location.assign(`http://${window.location.host}/dashboard`);
      }
    );
    builder.addCase(userAsyncThunk.register.rejected, (state, action) => {
      state.loadingState = "failed";
      state.errorCode = action.error.code;
    });
    builder.addCase(userAsyncThunk.login.pending, (state) => {
      state.loadingState = "pending";
      state.errorCode = undefined;
    });
    builder.addCase(
      userAsyncThunk.login.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log(action);
        state.loadingState = "idle";
        state.errorCode = undefined;
        state.isLoggedIn = true;
        localStorage.setItem("auth_token", action.payload.data.token);
        window.location.assign(`http://${window.location.host}/dashboard`);
      }
    );
    builder.addCase(userAsyncThunk.login.rejected, (state, action) => {
      console.log(action);
      state.loadingState = "failed";
      state.errorCode = action.error.code;
    });
    builder.addCase(userAsyncThunk.logout.pending, (state) => {
      state.loadingState = "pending";
      state.errorCode = undefined;
    });
    builder.addCase(userAsyncThunk.logout.fulfilled, (state) => {
      localStorage.removeItem("auth_token");
      state.isLoggedIn = false;
    });
    builder.addCase(userAsyncThunk.user.pending, (state) => {
      state.loadingState = "pending";
      state.errorCode = undefined;
    });
    builder.addCase(
      userAsyncThunk.user.fulfilled,
      (state, action: PayloadAction<{ data: { user: any } }>) => {
        state.loadingState = "idle";
        state.user = action.payload.data.user;
      }
    );
    builder.addCase(userAsyncThunk.user.rejected, (state, action) => {
      state.loadingState = "failed";
      state.errorCode = action.error.code;
      state.user = {};
    });
  },
});

export default userSlice.reducer;
