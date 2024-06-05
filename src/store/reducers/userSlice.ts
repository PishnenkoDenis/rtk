import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsersThunk } from "./actionCreators";

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // usersFetching(state) {
    //   state.isLoading = true;
    // },
    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.users = action.payload;
    // },
    // usersFetchingFailed(state, action: PayloadAction<string>) {
    //   state.error = action.payload;
    //   state.isLoading = false;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    });
    builder.addCase(fetchUsersThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsersThunk.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
