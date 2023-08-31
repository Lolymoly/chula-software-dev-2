import Card from "@/components/Card/page";

export default function HospitalList() {
	return (
		<div className='bg-[#fffdfd] min-h-screen flex flex-col justify-center gap-16 pt-16 pb-16'>
			<h1 className='flex justify-center font-semibold text-[5vw] sm:text-3xl md:text-4xl lg:text-5xl text-blue-800'>
				โรงพยาบาลที่เข้าร่วมโครงการ
			</h1>
			<div className='flex flex-col items-center md:flex-row gap-8 lg:px-16'>
				<Card
					title='โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย'
					description='Chulalongkorn Hospital'
					image='/chula.jpg'
					location='ถ.พระราม 4, เขตพญาไท กรุงเทพมหานคร, 10500'
					phone='02-774-1542'
					time='09:00 - 18:00'
				/>
				<Card
					title='โรงพยาบาลราชวิถี'
					description='Rajavithi Hospital'
					image='/rajavithi.jpg'
					location='ถ.พระราม 9, เขตสุขุมวิท กรุงเทพมหานคร, 12500'
					phone='02-774-8888'
					time='09:00 - 24:00'
				/>
				<Card
					title='โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย'
					description='Chulalongkorn Hospital'
					image='/chula.jpg'
					location='ถ.พระราม 4, เขตพญาไท กรุงเทพมหานคร, 10500'
					phone='02-774-1542'
					time='09:00 - 18:00'
				/>
			</div>
		</div>
	);
}
