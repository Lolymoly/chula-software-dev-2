"use client";

import { useState } from "react";
import VideoPlayer from "../VideoPlayer/page";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
	const [playing, setPlaying] = useState(true);

	useWindowListener("contextmenu", (e) => e.preventDefault());

	return (
		<div className='my-[100px]'>
			<div className='flex justify-center'>
				<VideoPlayer videoSrc='/video/getvaccine.mp4' isPlaying={playing} />
				<div className='flex flex-col justify-center ml-4 sm:ml-10'>
					<div>
						<h1 className='text-sm sm:text-xl font-semibold lg:text-[2vw] lg:mb-4'>
							Get Your Vaccine Today!
						</h1>
						<button
							className='bg-blue-500 text-white py-1 px-3 sm:px-4 rounded-full text-[8px] sm:text-xs lg:text-[1vw] lg:py-[7px] lg:px-5 mt-3'
							onClick={() => setPlaying(!playing)}
						>
							{playing ? "Pause" : "Play"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
