import styles from "./card.module.css";

export default function Card() {
	return (
		<div className={styles.cardMainDiv}>
			<div className={styles.cardTitle}>
				<div>
					<h1>
						คำแนะนำสำหรับการฉีด
						<span className={styles.vaccineText}>วัคซีน</span>
					</h1>
					<h1 className={styles.covidText}>Covid-19</h1>
				</div>
				<div>
					<img src='/syringe-clipart.png' className={styles.syringe} />
				</div>
			</div>
			<div className={styles.cardBody}>
				<div className={styles.cardContent}>
					<h2 className={styles.cardContentTitle}>ก่อนฉีดวัคซีน</h2>
					<ul className={styles.cardContentBody}>
						<li className={styles.cardContentBodyList}>พักผ่อนให้เพียงพอ</li>
						<li className={styles.cardContentBodyList}>
							งดออกกำลังกายหนัก 2 วัน
						</li>
						<li className={styles.cardContentBodyList}>
							หลีกเลี่ยงเครื่องดื่มแอลกอฮอล์
						</li>
						<li className={styles.cardContentBodyList}>
							ดื่มน้ำอย่างน้อย 500 ซีซี
						</li>
						<li className={styles.cardContentBodyList}>
							ต้องไม่มีอาการไข้และเจ็บป่วย
						</li>
					</ul>
				</div>
				<div className={styles.cardContent}>
					<h2 className={styles.cardContentTitle}>แจ้งแพทย์ก่อนฉีด</h2>
					<ul className={styles.cardContentBody}>
						<li className={styles.cardContentBodyList}>โรคประจำตัว</li>
						<li className={styles.cardContentBodyList}>
							ประวัติการแพ้ยาและวัคซีน
						</li>
						<li className={styles.cardContentBodyList}>การตั้งครรภ์</li>
						<li className={styles.cardContentBodyList}>
							ข้อมูลอื่น ๆ ที่แพทย์ควรทราบ
						</li>
					</ul>
				</div>
				<div className={styles.cardContent}>
					<h2 className={styles.cardContentTitle}>หลังฉีดวัคซีน</h2>
					<ul className={styles.cardContentBody}>
						<li className={styles.cardContentBodyList}>
							นั่งรอดูอาการ 30 นาที
						</li>
						<li className={styles.cardContentBodyList}>
							อาจอ่อนเพลีย มีไข้ ปวดกล้ามเนื้อ
						</li>
						<li className={styles.cardContentBodyList}>
							หากมีอาการรุนแรง เช่น ไข้สูง หน้ามืด เจ็บหน้าอก ต้องรีบไปพบแพทย์
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
