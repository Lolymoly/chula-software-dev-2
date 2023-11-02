"use client";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { BookingItem } from "../../../interfaces";
import { removeBookingItem } from "@/redux/features/bookSlice";
import { useAppSelector } from "@/redux/store"; // Use the typed selector here

export default function MyBooking() {
	const dispatch = useDispatch();
	const bookings = useAppSelector((state) => state.bookSlice.bookingItems);

	const handleDelete = (booking: BookingItem) => {
		dispatch(removeBookingItem(booking));
	};

	return (
		<div className='container mx-auto my-8'>
			<h1 className='text-xl font-bold mb-6'>My Bookings</h1>
			{bookings.length == 0 && (
				<div className='text-center'>No Vaccine Booking</div>
			)}
			{bookings.length != 0 && (
				<div>
					{bookings.map((booking: BookingItem, index: number) => (
						<div
							key={index}
							className='mb-4 p-4 border border-gray-300 rounded'
						>
							<p className='font-semibold'>
								First Name:{" "}
								<span className='font-normal'>{booking.firstname}</span>
							</p>
							<p className='font-semibold'>
								Last Name:{" "}
								<span className='font-normal'>{booking.lastname}</span>
							</p>
							<p className='font-semibold'>
								Citizen ID:{" "}
								<span className='font-normal'>{booking.citizen_id}</span>
							</p>
							<p className='font-semibold'>
								Hospital:{" "}
								<span className='font-normal'>{booking.hospital}</span>
							</p>
							<p className='font-semibold'>
								Booking Date:{" "}
								<span className='font-normal'>{booking.booking_date}</span>
							</p>
							<Button
								variant='text'
								color='error'
								onClick={() => handleDelete(booking)}
								className='mt-3'
							>
								Delete
							</Button>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
