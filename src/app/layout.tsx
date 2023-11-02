import MenuBar from "@/components/MenuBar/page";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ระบบจองวัคซีน",
	description: "Vaccine Booking System",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReduxProvider>
					<MenuBar />
					{children}
				</ReduxProvider>
			</body>
		</html>
	);
}
