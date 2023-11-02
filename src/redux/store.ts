import { configureStore } from "@reduxjs/toolkit";
// Import your reducers or slices here
import bookSlice from "./features/bookSlice";

export const store = configureStore({
	reducer: {
		bookSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
