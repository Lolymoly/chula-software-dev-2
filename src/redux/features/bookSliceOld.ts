import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
	bookingItems: BookingItem[];
};

const initialState: BookingState = {
	bookingItems: [],
};

export const bookSlice = createSlice({
	name: "book",
	initialState,
	reducers: {
		addBookingItem: (state, action: PayloadAction<BookingItem>) => {
			state.bookingItems.push(action.payload);
		},
		removeBookingItem: (state, action: PayloadAction<BookingItem>) => {
			const remainItems = state.bookingItems.filter((obj: any) => {
				return (
					obj.firstname !== action.payload.firstname ||
					obj.lastname !== action.payload.lastname ||
					obj.citizen_id !== action.payload.citizen_id ||
					obj.hospital !== action.payload.hospital ||
					obj.booking_date !== action.payload.booking_date
				);
			});
			state.bookingItems = remainItems;
		},
	},
});

export const { addBookingItem, removeBookingItem } = bookSlice.actions;
export default bookSlice.reducer;
