import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
	bookingItem: BookingItem | null; // Changed to a single object instead of an array
};

const initialState: BookingState = {
	bookingItem: null, // Initially there is no booking
};

export const bookSlice = createSlice({
	name: "book",
	initialState,
	reducers: {
		// Sets the bookingItem to the new booking, replacing any existing booking
		setBookingItem: (state, action: PayloadAction<BookingItem>) => {
			state.bookingItem = action.payload;
		},
		// Clear the bookingItem, setting it back to null
		removeBookingItem: (state) => {
			state.bookingItem = null;
		},
	},
});

export const { setBookingItem, removeBookingItem } = bookSlice.actions;
export default bookSlice.reducer;
