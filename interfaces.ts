export interface BookingItem {
	firstname: string;
	lastname: string;
	citizen_id: string;
	hospital: string;
	booking_date: string;
}

export interface HospitalData {
	name: string;
	address: string;
	district: string;
	province: string;
	postalcode: string;
	tel: string;
	picture: string;
}
