import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createReducer from "./reducers/root-reducer";

const rootReducer = createReducer();
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
