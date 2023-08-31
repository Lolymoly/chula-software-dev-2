import Link from "next/link";

export default function MenuBar() {
	return (
		<div className='bg-slate-50 py-4 px-8'>
			<div className='flex justify-end gap-12 items-center'>
				<Link
					href='/booking'
					className='text-slate-500 hover:bg-neutral-200 py-2 px-2 h-full rounded-md'
				>
					Booking
				</Link>
				<Link href='/'>
					<img src='/vaccine-logo.png' className='h-8 w-auto hover:shadow-md' />
				</Link>
			</div>
		</div>
	);
}
