import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import ReviewsIcon from "@mui/icons-material/Reviews";
import Rating from "@mui/material/Rating";

import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import InteractiveCard from "../InteractiveCard/page";
import { SetStateAction, useState } from "react";
import Link from "next/link";

type CardProps = {
	id: number | string;
	title: string;
	description: string;
	image?: string;
	location?: string;
	phone?: string;
	time?: string;
	rating?: number;
	onChangeRating?: Function;
	deleteRatingList: Function;
};

export default function HospitalCard({
	id,
	title,
	description,
	image = "",
	location = "กรุงเทพมหานคร",
	phone = "-",
	time = "Unknown",
	rating = 0,
	onChangeRating,
	deleteRatingList,
}: CardProps) {
	const changeRating = (newRating: number) => {
		if (!newRating) {
			deleteRatingList(title);
			return;
		}
		onChangeRating?.(title, newRating);
	};

	return (
		<InteractiveCard contentName={title}>
			<Card className='flex-1 max-w-xs md:max-w-none md:self-stretch min-w-[80vw] sm:min-w-[50vw] md:min-w-[30vw] shadow-lg'>
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
						{onChangeRating && (
							<CardDescription className='flex gap-2 items-center mt-1'>
								<ReviewsIcon style={{ fontSize: 14 }} />
								<Rating
									name='hospital-rating'
									size='small'
									value={rating}
									onChange={(e, newRating) => changeRating(newRating)}
								/>
							</CardDescription>
						)}
					</div>
				</CardContent>

				<CardFooter className='flex justify-center gap-2'>
					<Button className='select-none'>จองคิว</Button>
					<Link href={`/hospital/${id}`}>
						<Button variant='outline' className='select-none'>
							ดูข้อมูล
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</InteractiveCard>
	);
}
