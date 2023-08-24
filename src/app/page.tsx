import Image from "next/image";
import styles from "./page.module.css";
import Card from "../../components/Card/page";
import Banner from "../../components/Banner/page";

export default function Home() {
	return (
		<>
			<Banner />
			<Card />
		</>
	);
}
