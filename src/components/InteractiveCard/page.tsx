"use client";

export default function InteractiveCard({
	children,
	contentName,
}: {
	children: React.ReactNode;
	contentName: string;
}) {
	const handleCardClick = () => {};
	const onCardMouseAction = (event: React.SyntheticEvent) => {
		if (event.type == "mouseover") {
			event.currentTarget.classList.remove("shadow-lg");
			event.currentTarget.classList.add("shadow-2xl");
			event.currentTarget.classList.remove("bg-white");
			event.currentTarget.classList.add("bg-neutral-200");
		} else if (event.type == "mouseout") {
			event.currentTarget.classList.remove("shadow-2xl");
			event.currentTarget.classList.add("shadow-lg");
			event.currentTarget.classList.remove("bg-neutral-200");
			event.currentTarget.classList.add("bg-white");
		}
	};

	return (
		<div
			className='rounded-lg'
			onClick={() => handleCardClick()}
			onMouseOver={(e) => onCardMouseAction(e)}
			onMouseOut={(e) => onCardMouseAction(e)}
		>
			{children}
		</div>
	);
}
