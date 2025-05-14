import mongoose from "mongoose";
export const connectDB = async () => {
	await mongoose
		.connect(
			"mongodb+srv://brendachipanav:taskflow26@cluster0.vdwygpg.mongodb.net/Taskflow",
		)
		.then(() => console.log("DB CONNECTED"));
};
