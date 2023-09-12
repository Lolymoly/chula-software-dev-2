import Image from "next/image";
import styles from "./page.module.css";
import Content1 from "@/components/Content1/page";
import Banner from "@/components/Banner/page";
import Card from "@/components/Card/page";
import HospitalList from "@/components/HospitalList/page";
import Subscribe from "@/components/Subscribe/page";
import BannerCycle from "@/components/BannerCycle/page";

export default function Home() {
	return (
		<>
			<BannerCycle />
			{/* <Banner />
			<Content1 />
			<HospitalList />
			<Subscribe /> */}
		</>
	);
}
