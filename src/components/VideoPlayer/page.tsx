"use client";

import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function VideoPlayer({
	videoSrc,
	isPlaying,
}: {
	videoSrc: string;
	isPlaying: boolean;
}) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isPlaying) {
			videoRef.current?.play();
		} else {
			videoRef.current?.pause();
		}
	}, [isPlaying]);

	return (
		<>
			{isClient && (
				<video
					src={videoSrc}
					ref={videoRef}
					controls={true}
					muted={true}
					loop={true}
					autoPlay={false}
					className='w-1/3 sm:w-1/5'
				/>
			)}
		</>
	);
}
