"use client";
import { Provider as ReactReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store"; // Make sure to import persistor

export default function ReduxProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ReactReduxProvider store={store}>
			{/* PersistGate loading prop can be null or a loading component */}
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</ReactReduxProvider>
	);
}
