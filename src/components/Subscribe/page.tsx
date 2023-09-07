"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";

export default function Subscribe() {
	const [email, setEmail] = useState("");
	const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
	const [isEmailValid, setIsEmailValid] = useState(true); // Initial state is valid
	const [isCheckValid, setIsCheckValid] = useState(true); // Initial state is valid

	const handleSubscribeClick = async () => {
		let ok = true;

		// Validate email format
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			setIsEmailValid(false);
			ok = false;
		} else setIsEmailValid(true);

		// Check if the checkbox is checked
		if (!isCheckboxChecked) {
			setIsCheckValid(false);
			ok = false;
		} else setIsCheckValid(true);

		if (!ok) return;

		const res = await fetch("/api/email", {
			method: "POST",
			body: JSON.stringify({
				firstName: email.split("@")[0],
				email: email,
			}),
		});
		console.log(res);
	};

	return (
		<div className='h-screen flex justify-center items-center overflow-x-hidden'>
			<div className='w-full max-w-[1000px] px-4 sm:px-10'>
				<h1 className='text-3xl sm:text-4xl font-semibold mb-8 sm:mb-10 flex justify-center'>
					สมัครรับข้อมูลวัคซีน
				</h1>
				<div className='flex relative'>
					<Input
						type='email'
						placeholder='Your Email'
						onChange={(e) => setEmail(e.target.value)}
						className={isEmailValid ? "" : "border-red-500 pr-[100px]"}
					/>
					<Button onClick={handleSubscribeClick} className='absolute right-0'>
						Subscribe
					</Button>
				</div>
				<div className='flex items-center mt-3 gap-2'>
					<Checkbox
						id='subscribeTerms'
						className={`w-3 h-3`}
						onCheckedChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
					/>
					<label
						htmlFor='subscribeTerms'
						className='text-xs sm:text-sm text-slate-400'
					>
						ฉันยอมรับ
						<span className='underline'>ข้อตกลงและเงื่อนไขการใช้งาน</span>และ
						<span className='underline'>นโยบายความเป็นส่วนตัว</span>
						ของเว็บไซต์นี้
					</label>{" "}
					{!isCheckValid ? (
						<span className='text-red-500 text-xs mr-2'>* จำเป็น</span>
					) : null}
				</div>
			</div>
		</div>
	);
}
