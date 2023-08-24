import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
	return (
		<div className={styles.banner}>
			<div>
				<img
					src='/vaccinate-clipart.png'
					alt='banner'
					className={styles.bannerImage}
				/>
			</div>
			<div className={styles.bannerText}>
				<h1>
					จองวัคซีน COVID-19
					<br />
					ได้แล้ววันนี้!
				</h1>
				<div className={styles.bannerButtonDiv}>
					<button className={styles.bannerButton}>ลงทะเบียน</button>
					<button className={styles.bannerButton}>
						ค้นหาโรงพยาบาลใกล้บ้าน
					</button>
				</div>
			</div>
		</div>
	);
}
