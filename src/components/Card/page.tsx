import styles from "./card.module.css";

export default function Card() {
	return (
		<div className={styles.cardMainDiv}>
			<div className={styles.cardTitle}>
				<div>
					<h1 className='font-semibold text-[4vw] sm:text-[36px] lg:text-[3.5vw] sm:leading-[64px] xl:leading-[96px]'>
						คำแนะนำสำหรับการฉีด
						<span className={styles.vaccineText}>วัคซีน</span>
					</h1>
					<h1
						className={`${styles.covidText} font-semibold text-[18px] sm:text-[36px] lg:text-[3.5vw] xl:leading-[96px]`}
					>
						Covid-19
					</h1>
				</div>
				<div>
					<img src='/syringe-clipart.png' className={styles.syringe} />
				</div>
			</div>
			<div className={styles.cardBody}>
				<div className={styles.cardContent}>
					<h2 className={`${styles.cardContentTitle} font-semibold`}>
						ก่อนฉีดวัคซีน
					</h2>
					<ul className={`${styles.cardContentBody} list-disc`}>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							พักผ่อนให้เพียงพอ
						</li>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							งดออกกำลังกายหนัก 2 วัน
						</li>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							หลีกเลี่ยงเครื่องดื่มแอลกอฮอล์
						</li>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							ดื่มน้ำอย่างน้อย 500 ซีซี
						</li>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							ต้องไม่มีอาการไข้และเจ็บป่วย
						</li>
					</ul>
				</div>
				<div className={styles.cardContent}>
					<h2 className={`${styles.cardContentTitle} font-semibold`}>
						แจ้งแพทย์ก่อนฉีด
					</h2>
					<ul className={`${styles.cardContentBody} list-disc`}>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							โรคประจำตัว
						</li>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							ประวัติการแพ้ยาและวัคซีน
						</li>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							การตั้งครรภ์
						</li>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							ข้อมูลอื่น ๆ ที่แพทย์ควรทราบ
						</li>
					</ul>
				</div>
				<div className={styles.cardContent}>
					<h2 className={`${styles.cardContentTitle} font-semibold`}>
						หลังฉีดวัคซีน
					</h2>
					<ul className={`${styles.cardContentBody} list-disc`}>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							นั่งรอดูอาการ 30 นาที
						</li>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							อาจอ่อนเพลีย มีไข้ ปวดกล้ามเนื้อ
						</li>
						<li className={`${styles.cardContentBodyList} ml-7 pl-2`}>
							หากมีอาการรุนแรง เช่น ไข้สูง หน้ามืด เจ็บหน้าอก ต้องรีบไปพบแพทย์
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
