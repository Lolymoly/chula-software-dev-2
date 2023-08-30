import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";

export default function Hospital() {
	return (
		<div className='h-screen flex items-center bg-[#fffdfd]'>
			<Card>
				<CardHeader>
					<CardTitle>โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย</CardTitle>
					<CardDescription>Chulalongkorn Hospital</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col items-center'>
					<div className='max-w-sm px-2'>
						<img
							src='/chula.jpg'
							className='object-center object-cover rounded-md mb-5'
						/>
					</div>

					<div className='flex flex-col gap-[6px]'>
						<CardDescription className='flex gap-2 items-center'>
							<FaLocationDot size={14} />
							ถ.พระราม 4, เขตพญาไท กรุงเทพมหานคร, 10500
						</CardDescription>
						<CardDescription className='flex gap-2 items-center'>
							<FaPhone size={14} />
							02-774-1542
						</CardDescription>
						<CardDescription className='flex gap-2 items-center'>
							<FaClock size={14} />
							09:00 - 18:00
						</CardDescription>
					</div>
				</CardContent>

				<CardFooter className='flex justify-center gap-2'>
					<Button>จองคิว</Button>
					<Button variant='outline'>ดูข้อมูล</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
