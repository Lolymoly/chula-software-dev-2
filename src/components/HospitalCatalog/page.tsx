import Card from "@/components/Card/page";

const HospitalCatalog = ({ hospitalJson }: { hospitalJson: Object }) => {
	console.log(hospitalJson.data);

	return (
		<>
			<div>Explore {hospitalJson.count} hospitals in our catalog</div>
			<div className='flex flex-row items-center md:flex-row md:gap-6 gap-12 lg:px-16 px-4 overflow-hidden'>
				{hospitalJson.data.map((hospital, index) => (
					<Card
						id={index + 1}
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
