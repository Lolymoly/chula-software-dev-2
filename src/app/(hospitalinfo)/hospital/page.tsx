"use client";
import HospitalCatalog from "@/components/HospitalCatalog/page";
import getHospitals from "@/libs/getHospitals";
import { Suspense, useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { useSession } from "next-auth/react";
import AddHospitalForm from "@/components/AddHospitalForm.tsx/page";

export default function HospitalPage() {
	const { data: session, status } = useSession();
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		async function fetchUserRole() {
			// Only try to fetch the role if the user is authenticated
			if (status === "authenticated") {
				try {
					const response = await fetch("http://localhost:5000/api/v1/auth/me", {
						headers: {
							// Pass the session token as a bearer token in the authorization header
							Authorization: `Bearer ${session.user.token}`,
						},
					});
					const userData = await response.json();
					// console.log(userData.data.role);
					if (response.ok && userData.data.role === "admin") {
						setIsAdmin(true);
					}
				} catch (error) {
					console.error("Failed to fetch user role:", error);
				}
			}
		}

		fetchUserRole();
	}, [status, session]);

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
				{isAdmin && (
					<div className='mt-10'>
						<AddHospitalForm />
					</div>
				)}
			</Suspense>
		</>
	);
}
