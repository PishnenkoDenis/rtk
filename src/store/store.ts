import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import { postApi } from "../services/postService";

const rootReducer = combineReducers({
  userReducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(postApi.middleware),
  });
};

export type TAppStore = ReturnType<typeof setUpStore>;
export type TRootState = ReturnType<typeof rootReducer>;
//тип dispatch-а стора включает все экшены, определенные в сторе
export type TAppDispatch = TAppStore["dispatch"];
