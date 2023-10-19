import Card from "@/components/Card/page";

const HospitalCatalog = async ({ hospitalJson }: { hospitalJson: Object }) => {
	const hospitalJsonReady = await hospitalJson;
	return (
		<>
			<div>Explore {hospitalJsonReady.count} hospitals in our catalog</div>
			<div className='flex flex-row items-center md:flex-row md:gap-6 gap-12 lg:px-16 px-4 overflow-hidden'>
				{hospitalJsonReady.data.map((hospital, index) => (
					<Card
						id={hospital.id}
						key={index}
						title={hospital.name}
						description={hospital.province}
						image={hospital.picture}
						location={hospital.address + ", " + hospital.postalcode}
						phone={hospital.tel}
						time='-'
						deleteRatingList={() => {}}
					/>
				))}
			</div>
		</>
	);
};

export default HospitalCatalog;
