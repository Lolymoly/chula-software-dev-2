"use client";
import Card from "@/components/Card/page";
import { Rating } from "@mui/material";
import { useRef, useState, MouseEvent, useEffect, useReducer } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CardPanelNew() {
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const initialPosition = 30;
	const cardWidth = 300;
	const [scrollPosition, setScrollPosition] = useState(initialPosition);

	// mock hospital data
	const hospitalList = [
		{
			id: 1,
			title: "โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
			description: "Chulalongkorn Hospital",
			image: "/chula.jpg",
			location: "ถ.พระราม 4, เขตพญาไท กรุงเทพมหานคร, 10500",
			phone: "02-774-1542",
			time: "09:00 - 18:00",
		},
		{
			id: 2,
			title: "โรงพยาบาลราชวิถี",
			description: "Rajavithi Hospital",
			image: "/rajavithi.jpg",
			location: "ถ.พระราม 9, เขตสุขุมวิท กรุงเทพมหานคร, 12500",
			phone: "02-774-8888",
			time: "09:00 - 24:00",
		},
		{
			id: 3,
			title: "โรงพยาบาลธรรมศาสตร์",
			description: "Thammasat Hospital",
			image: "/thammasat.jpg",
			location: "ถ.เพชรเกษม, เขตท่าพระ กรุงเทพมหานคร, 14500",
			phone: "02-774-9999",
			time: "24 ชั่วโมง",
		},
	];

	const ratingReducer = (
		state: Map<string, number>,
		action: { type: string; payload: any }
	) => {
		switch (action.type) {
			case "set":
				return new Map<string, number>(action.payload);
			case "update":
				state.set(action.payload.title, action.payload.rating);
				return new Map<string, number>(state);
			case "delete":
				// delete record that match title
				state.delete(action.payload);
				return new Map<string, number>(state);
			default:
				return state;
		}
	};
	const [ratingList, dispatchRatingList] = useReducer(
		ratingReducer,
		new Map<string, number>()
	);

	const removeRating = (title: string) => {
		dispatchRatingList({ type: "delete", payload: title });
	};

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollLeft = initialPosition;
		}
	}, []);

	const handleLeftButtonClick = (e: MouseEvent<HTMLDivElement>) => {
		containerRef.current?.scrollBy({
			left: -cardWidth,
			behavior: "smooth",
		});
	};

	const handleRightButtonClick = (e: MouseEvent<HTMLDivElement>) => {
		containerRef.current?.scrollBy({
			left: cardWidth,
			behavior: "smooth",
		});
	};

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
		setScrollLeft(containerRef.current?.scrollLeft || 0);
		if (containerRef.current) {
			containerRef.current.style.cursor = "grabbing";
		}
	};

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		const x = e.pageX - (containerRef.current?.offsetLeft || 0);
		const walk = (x - startX) * 1.5; // Adjust scroll speed
		if (containerRef.current) {
			containerRef.current.scrollLeft = scrollLeft - walk;
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		if (containerRef.current) {
			containerRef.current.style.cursor = "grab";
		}
	};
	return (
		<div className='bg-[#fffdfd] min-h-screen flex flex-col justify-center gap-16 py-[100px]'>
			<div className='flex gap-4 sm:gap-8 justify-center items-center font-semibold text-[5vw] sm:text-3xl md:text-4xl lg:text-5xl text-blue-800'>
				<div
					className=' bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-full p-2 sm:p-4 transition duration-75 ease-in-out active:bg-slate-300'
					onClick={handleLeftButtonClick}
				>
					<FaAngleLeft />
				</div>
				<h1>โรงพยาบาลที่เข้าร่วมโครงการ</h1>
				<div
					className='bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-full p-2 sm:p-4 transition duration-75 ease-in-out active:bg-slate-300'
					onClick={handleRightButtonClick}
				>
					<FaAngleRight />
				</div>
			</div>
			<div
				ref={containerRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				className='flex flex-row items-center md:flex-row md:gap-6 gap-12 lg:px-16 px-4 overflow-hidden'
			>
				{hospitalList.map((hospital, index) => (
					<Card
						id={hospital.id}
						key={index}
						title={hospital.title}
						description={hospital.description}
						image={hospital.image}
						location={hospital.location}
						phone={hospital.phone}
						time={hospital.time}
						onChangeRating={(title: string, rating: number) => {
							dispatchRatingList({
								type: "update",
								payload: { title, rating },
							});
						}}
						rating={ratingList.get(hospital.title)}
						deleteRatingList={() => removeRating(hospital.title)}
					/>
				))}
			</div>
			<div className='flex justify-center text-sm sm:text-base mx-2'>
				<div className='w-[400px] flex flex-col justify-center'>
					{/* display ratingList as title: rating */}
					{Array.from(ratingList).map(([title, rating]) => (
						<div
							key={title}
							className='hover:bg-slate-50 hover:cursor-pointer flex justify-between'
							onClick={() => removeRating(title)}
						>
							<div>{title}:</div>
							<div>{rating} คะแนน</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
