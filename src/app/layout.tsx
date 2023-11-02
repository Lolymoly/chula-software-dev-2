import MenuBar from "@/components/MenuBar/page";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ระบบจองวัคซีน",
	description: "Vaccine Booking System",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReduxProvider>
					<NextAuthProvider session={session}>
						<MenuBar />
						{children}
					</NextAuthProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
