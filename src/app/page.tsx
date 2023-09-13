import Image from "next/image";
import styles from "./page.module.css";
import Content1 from "@/components/Content1/page";
import TextBanner from "@/components/TextBanner/page";
import Card from "@/components/Card/page";
import CardPanel from "@/components/CardPanel/page";
import Subscribe from "@/components/Subscribe/page";
import Banner from "@/components/Banner/page";

export default function Home() {
  return (
    <>
      <Banner />
      <TextBanner />
      <Content1 />
      <CardPanel />
      <Subscribe />
    </>
  );
}
