import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: ".env.test" });

export async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
}

export async function disconnectDB() {
  const collections = await mongoose.connection.db.collections();
  for (const collection of collections) {
    await collection.deleteMany({});
  }
  await mongoose.connection.close();
}