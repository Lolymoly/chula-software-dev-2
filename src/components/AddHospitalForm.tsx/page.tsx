import { HospitalData } from "../../../interfaces";
import addHospital from "./addhospital";

const AddHospitalForm: React.FC = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data: HospitalData = {
			name: formData.get("name") as string,
			address: formData.get("address") as string,
			district: formData.get("district") as string,
			province: formData.get("province") as string,
			postalcode: formData.get("postalcode") as string,
			tel: formData.get("tel") as string,
			picture: formData.get("picture") as string,
		};
		console.log(data);
		await addHospital(data);
	};

	return (
		<div className='flex items-center justify-center h-screen'>
			<form
				onSubmit={handleSubmit}
				className='space-y-5 px-10 py-8 bg-white rounded shadow-lg w-full max-w-md'
			>
				<div className='font-semibold text-2xl text-center mb-4'>
					Add New Hospital
				</div>
				<input
					type='text'
					name='name'
					placeholder='Hospital Name'
					className='w-full px-4 py-2 border rounded-md'
				/>
				<input
					type='text'
					name='address'
					placeholder='Address'
					className='w-full px-4 py-2 border rounded-md'
				/>
				<input
					type='text'
					name='district'
					placeholder='District'
					className='w-full px-4 py-2 border rounded-md'
				/>
				<input
					type='text'
					name='province'
					placeholder='Province'
					className='w-full px-4 py-2 border rounded-md'
				/>
				<input
					type='text'
					name='postalcode'
					placeholder='Postal Code'
					className='w-full px-4 py-2 border rounded-md'
				/>
				<input
					type='text'
					name='tel'
					placeholder='Phone Number'
					className='w-full px-4 py-2 border rounded-md'
				/>
				<input
					type='text'
					name='picture'
					placeholder='Picture URL'
					className='w-full px-4 py-2 border rounded-md'
				/>
				<button
					type='submit'
					className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 w-full'
				>
					Add Hospital
				</button>
			</form>
		</div>
	);
};

export default AddHospitalForm;
