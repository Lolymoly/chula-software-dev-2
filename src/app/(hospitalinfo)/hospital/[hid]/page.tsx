import Card from "@/components/Card/page";

export default function HospitalPage({ params }: { params: { hid: string } }) {
	const mockHospitalRepo = new Map();
	mockHospitalRepo.set("1", {
		title: "โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
		description: "Chulalongkorn Hospital",
		image: "/chula.jpg",
	});
	mockHospitalRepo.set("2", {
		title: "โรงพยาบาลราชวิถี",
		description: "Rajavithi Hospital",
		image: "/rajavithi.jpg",
	});
	mockHospitalRepo.set("3", {
		title: "โรงพยาบาลธรรมศาสตร์",
		description: "Thammasat Hospital",
		image: "/thammasat.jpg",
	});

	return (
		<div className='w-full flex justify-center ml-auto mr-auto'>
			<div className='flex justify-center align-middle gap-4 sm:gap-16 mt-10 mx-6'>
				<div className='self-center w-1/2 min-w-[150px]'>
					<img src={mockHospitalRepo.get(params.hid).image} />
				</div>
				<div className='ml-auto mr-auto self-center justify-self-center text-xl font-semibold flex-wrap'>
					{mockHospitalRepo.get(params.hid).title}
				</div>
			</div>
		</div>
	);
}
