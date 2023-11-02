"use client";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { removeBookingItem } from "@/redux/features/bookSlice";
import { useAppSelector } from "@/redux/store"; // Use the typed selector here

export default function MyBooking() {
	const dispatch = useDispatch();
	// Since we now store a single item, you do not need to map over an array
	const booking = useAppSelector((state) => state.bookSlice.bookingItem);

	const handleDelete = () => {
		dispatch(removeBookingItem());
	};

	return (
		<div className='container mx-auto my-8'>
			<h1 className='text-xl font-bold mb-6'>My Booking</h1>
			{!booking && <div className='text-center'>No Vaccine Booking</div>}
			{booking && (
				<div className='mb-4 p-4 border border-gray-300 rounded'>
					<p className='font-semibold'>
						First Name: <span className='font-normal'>{booking.firstname}</span>
					</p>
					<p className='font-semibold'>
						Last Name: <span className='font-normal'>{booking.lastname}</span>
					</p>
					<p className='font-semibold'>
						Citizen ID:{" "}
						<span className='font-normal'>{booking.citizen_id}</span>
					</p>
					<p className='font-semibold'>
						Hospital: <span className='font-normal'>{booking.hospital}</span>
					</p>
					<p className='font-semibold'>
						Booking Date:{" "}
						<span className='font-normal'>{booking.booking_date}</span>
					</p>
					<Button
						variant='text'
						color='error'
						onClick={handleDelete}
						className='mt-3'
					>
						Delete
					</Button>
				</div>
			)}
		</div>
	);
}
