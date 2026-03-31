import mongoose from "mongoose";

const validateMongoUri = (uri) => {
  if (!uri || typeof uri !== "string") {
    throw new Error("MONGO_URI is not set. Add it to .env and restart the app.");
  }

  const normalized = uri.trim();
  if (!normalized.startsWith("mongodb://") && !normalized.startsWith("mongodb+srv://")) {
    throw new Error("Invalid MONGO_URI scheme. Must start with mongodb:// or mongodb+srv://");
  }

  return normalized;
};

export const connectDB = async () => {
  try {
    const mongoUri = validateMongoUri(process.env.MONGO_URI);
    const conn = await mongoose.connect(mongoUri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};