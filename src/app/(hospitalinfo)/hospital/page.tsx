import HospitalCatalog from "@/components/HospitalCatalog/page";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function HospitalPage() {
	const hospitals = getHospitals();
	return (
		<>
			<h1>โรงพยาบาลทั้งหมด</h1>
			<Suspense
				fallback={
					<p>
						Loading...
						<LinearProgress />
					</p>
				}
			>
				<HospitalCatalog hospitalJson={hospitals} />
			</Suspense>
		</>
	);
}
