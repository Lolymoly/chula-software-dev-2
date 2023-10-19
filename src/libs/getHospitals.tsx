export default async function getHospitals() {
	const response = await fetch("http://localhost:5000/api/v1/hospitals");
	if (!response.ok) throw new Error(response.statusText);
	const data = await response.json();
	// console.log(data);
	return data;
}
