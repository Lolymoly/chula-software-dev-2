import Link from "next/link";

export default function MenuBar() {
	return (
		<div className='border-b py-1 px-2 sm:py-2 sm:px-6 md:py-3 md:px-8'>
			<div className='flex justify-end gap-4 sm:gap-12 items-center'>
				<Link
					href='/booking'
					className='text-xs sm:text-base text-slate-500 hover:bg-neutral-200 py-2 px-2 h-full rounded-md'
				>
					Booking
				</Link>
				<Link href='/'>
					<img
						src='/vaccine-doctor-clipart.jpg'
						className='h-6 sm:h-10 w-auto hover:shadow-md'
					/>
				</Link>
			</div>
		</div>
	);
}
