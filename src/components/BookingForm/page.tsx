"use client";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../../interfaces";
import { setBookingItem } from "@/redux/features/bookSlice";

export default function BookingForm() {
	const [num, setNum] = useState<any>("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [hospitalId, setHospitalId] = useState("");
	const [date, setDate] = useState(null); // for date picker

	const [hospitals, setHospitals] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchHospitals = async () => {
			try {
				const response = await fetch("http://localhost:5000/api/v1/hospitals");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setHospitals(data.data);
			} catch (error) {
				console.error("Could not fetch hospitals:", error);
			}
		};

		fetchHospitals();
	}, []);

	const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Define a regular expression to match all non-digit characters
		const nonDigitRegex = /[^\d]/g;

		// Use the replace method to remove non-digit characters from e.target.value
		const numericValue = e.target.value.replace(nonDigitRegex, "");

		// Convert the numericValue to an integer using parseInt
		const numericValueAsNumber = parseInt(numericValue, 10); // The second argument (10) specifies the radix/base (decimal).

		// Update the state with the numeric value

		//if numericValueAsNumber is NaN, set num to empty number
		if (isNaN(numericValueAsNumber)) setNum("");
		else setNum(numericValueAsNumber);
	};

	const urlParams = useSearchParams();
	const hid = urlParams.get("id");
	const hname = urlParams.get("hospital");

	const hid_to_hname = (id: number) => {
		if (id == 1) return "Chulalongkorn Hospital";
		else if (id == 2) return "Rajavithi Hospital";
		else if (id == 3) return "Thammasat University Hospital";
		else return "Unknown Hospital";
	};

	const submitData = () => {
		const bookingData: BookingItem = {
			firstname: firstName,
			lastname: lastName,
			citizen_id: num.toString(),
			hospital: hid_to_hname(hospitalId),
			// hospital: hospitalId,
			booking_date: date ? date.format("YYYY-MM-DD") : "", // Format date to string
		};
		dispatch(setBookingItem(bookingData));
	};

	return (
		<div className='px-10 lg:px-[100px]'>
			<h1 className='mt-12 flex justify-center mb-8 text-[28px] font-semibold'>
				ลงทะเบียนฉีดวัคซีน
			</h1>
			<div className='flex flex-col gap-8 mb-8'>
				<div className='flex gap-8 flex-col sm:flex-row sm:gap-4'>
					<TextField
						fullWidth
						placeholder='ชื่อ'
						variant='outlined'
						size='small'
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setFirstName(e.target.value)
						}
					/>
					<TextField
						fullWidth
						placeholder='นามสกุล'
						variant='outlined'
						size='small'
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setLastName(e.target.value)
						}
					/>
				</div>

				<TextField
					fullWidth
					placeholder='รหัสบัตรประจำตัวประชาชน'
					type='text'
					variant='outlined'
					size='small'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleNumberInputChange(e)
					}
					value={num}
				/>
			</div>
			<div>
				<FormControl fullWidth>
					<InputLabel id='hospital-select' size='small'>
						เลือกโรงพยาบาล
					</InputLabel>
					<Select
						labelId='hospital-select'
						id='demo-simple-select'
						label='เลือกโรงพยาบาล'
						size='small'
						value={hospitalId}
						onChange={(e) => setHospitalId(e.target.value)}
						fullWidth
					>
						<MenuItem value={1}>Chulalongkorn Hospital</MenuItem>
						<MenuItem value={2}>Rajavithi Hospital</MenuItem>
						<MenuItem value={3}>Thammasat University Hospital</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div className='mt-12'>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<div className='flex justify-center text-slate-400 mb-3'>
						วันที่ต้องการรับวัคซีน
					</div>
					<DatePicker
						format='D/M/YYYY'
						className='w-full'
						value={date}
						onChange={(newValue) => setDate(newValue)}
						// renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
			</div>
			<div className='flex justify-center mt-8 mb-8 gap-2'>
				<Button variant='outlined' className='min-w-[125px]'>
					ตรวจสอบข้อมูล
				</Button>
				<Button
					variant='contained'
					className='bg-blue-600 min-w-[125px]'
					onClick={submitData}
				>
					ลงทะเบียน
				</Button>
			</div>
			{hid}
			{hname}
		</div>
	);
}
