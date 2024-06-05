import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { TAppDispatch, TRootState } from "../store/store";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
