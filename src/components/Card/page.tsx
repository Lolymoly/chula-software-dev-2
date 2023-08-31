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

type CardProps = {
	title: string;
	description: string;
	image?: string;
	location?: string;
	phone?: string;
	time?: string;
};

export default function HospitalCard({
	title,
	description,
	image = "",
	location = "กรุงเทพมหานคร",
	phone = "-",
	time = "Unknown",
}: CardProps) {
	return (
		<Card className='flex-1 max-w-xs md:max-w-none md:self-stretch min-w-[80vw] sm:min-w-[50vw] md:min-w-[30vw]'>
			<CardHeader className='md:min-h-[140px] cardlg:min-h-0 select-none'>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col items-center'>
				<div className='max-w-xs md:max-w-sm px-2'>
					<img
						src={image}
						className='object-center object-cover rounded-md mb-5 select-none'
						draggable={false}
					/>
				</div>
				<div className='flex flex-col gap-[6px] select-none'>
					<CardDescription className='flex gap-2 items-center'>
						<FaLocationDot size={14} />
						{location}
					</CardDescription>
					<CardDescription className='flex gap-2 items-center'>
						<FaPhone size={14} />
						{phone}
					</CardDescription>
					<CardDescription className='flex gap-2 items-center'>
						<FaClock size={14} />
						{time}
					</CardDescription>
				</div>
			</CardContent>

			<CardFooter className='flex justify-center gap-2'>
				<Button className='select-none'>จองคิว</Button>
				<Button variant='outline' className='select-none'>
					ดูข้อมูล
				</Button>
			</CardFooter>
		</Card>
	);
}
