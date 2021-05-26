import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { appReducer } from "./app.reducer";

export const appStore = configureStore({
  reducer: appReducer,
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
