import HospitalCatalog from "@/components/HospitalCatalog/page";
import getHospitals from "@/libs/getHospitals";

export default async function Temp() {
	const hospitals = await getHospitals();
	return <HospitalCatalog hospitalJson={hospitals} />;
}
