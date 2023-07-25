import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import store, { RootState } from "@/store/ConfigStore";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;