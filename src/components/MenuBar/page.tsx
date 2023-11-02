import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MenuBar() {
	const session = await getServerSession(authOptions);

	return (
		<div className='border-b py-1 px-2 sm:py-2 sm:px-6 md:py-3 md:px-8'>
			<div className='flex justify-between gap-4 sm:gap-12 items-center'>
				<div className='flex text-gray-500 gap-12'>
					<div>
						{session ? (
							<Link href='/api/auth/signout'>
								{" "}
								<div>Sign out: {session.user?.name}</div>
							</Link>
						) : (
							<Link href='/api/auth/signin'>Sign In</Link>
						)}
					</div>
					<div>
						<Link
							href='/mybooking'
							className='text-xs sm:text-base text-slate-500 hover:bg-neutral-200 py-2 px-2 h-full rounded-md'
						>
							My Bookings
						</Link>
					</div>
				</div>
				<div className='flex gap-6'>
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
		</div>
	);
}
