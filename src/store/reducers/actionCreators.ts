import axios from "axios";
// import { TAppDispatch } from "../store";
import { IUser } from "../../models/IUser";
// import { userSlice } from "./userSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

// export const fetchUsers = () => async (dispatch: TAppDispatch) => {
//   const { usersFetching, usersFetchingSuccess, usersFetchingFailed } =
//     userSlice.actions;
//   try {
//     dispatch(usersFetching());
//     const response = await axios.get<IUser[]>(USERS_URL);
//     dispatch(usersFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(usersFetchingFailed("something went wrong"));
//   }
// };

export const fetchUsersThunk = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(USERS_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
