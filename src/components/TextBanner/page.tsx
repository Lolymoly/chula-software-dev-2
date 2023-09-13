import Image from "next/image";
import styles from "./banner.module.css";

export default function TextBanner() {
  return (
    <div className={styles.banner}>
      <div>
        <img
          src="/vaccinate-clipart.png"
          alt="banner"
          className={styles.bannerImage}
        />
      </div>
      <div className={styles.bannerText}>
        <h1 className="font-bold text-[5vw] sm:text-[36px] lg:text-[3.5vw]">
          จองวัคซีน COVID-19
          <br />
          ได้แล้ววันนี้!
        </h1>
        <div className={styles.bannerButtonDiv}>
          <button
            className={`${styles.bannerButton} text-[7px] sm:text-xs md:text-base md:px-3 md:rounded-xl lg:py-[6px] px-[6px] sm:px-2 sm:py-1 py-[2.5px] rounded-lg`}
          >
            ลงทะเบียน
          </button>
          <button
            className={`${styles.bannerButton} text-[7px] sm:text-xs md:text-base md:px-3 md:rounded-xl lg:py-[6px] px-[6px] sm:px-2 sm:py-1 py-[2.5px] rounded-lg`}
          >
            ค้นหาโรงพยาบาลใกล้บ้าน
          </button>
        </div>
      </div>
    </div>
  );
}
