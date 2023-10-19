import Card from "@/components/Card/page";
import getHospital from "@/libs/getHospital";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default async function HospitalPage({
	params,
}: {
	params: { hid: string };
}) {
	const hospital = await getHospital({ id: params.hid });

	return (
		<div className='w-full flex justify-center ml-auto mr-auto'>
			<div className='flex justify-center align-middle gap-4 sm:gap-16 mt-10 mx-6'>
				<div className='self-center w-1/2 min-w-[150px]'>
					<img src={hospital.data.picture} />
				</div>
				<div className='ml-auto mr-auto self-center justify-self-center text-xl font-semibold flex-wrap'>
					<div className='mb-3'>{hospital.data.name}</div>
					<div className='font-normal text-sm text-gray-500'>
						{hospital.data.address + ", " + hospital.data.postalcode}
					</div>
					<div className='font-normal text-sm text-gray-500'>
						{hospital.data.tel}
					</div>
				</div>
			</div>
		</div>
	);
}
