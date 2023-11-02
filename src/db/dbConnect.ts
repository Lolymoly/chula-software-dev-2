import mongoose from "mongoose";

let isConnected: boolean = false;
export const dbConnect = async () => {
	mongoose.set("strictQuery", true);
	if (isConnected) {
		return;
	}

	const MONGO_URI =
		process.env.MONGO_URI || "mongodb://localhost:27017/booking";
	if (!MONGO_URI) {
		throw new Error("Mongo URI not found");
	}

	try {
		await mongoose.connect(MONGO_URI, { bufferCommands: false });
		isConnected = true;
		console.log("Connected to MongoDB");
	} catch (err) {
		console.log(err);
	}
};
