"use server";

import { dbConnect } from "@/db/dbConnect";
import { HospitalData } from "../../../interfaces";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function addHospital(data: HospitalData) {
	// console.log(data);
	try {
		await dbConnect();
		const hospital = await Hospital.create(data);
		console.log(hospital);

		revalidateTag("hospitals");
		redirect("/hospital");
	} catch (error) {
		console.log(error);
	}
}
