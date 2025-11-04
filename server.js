import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import connectRedis from "connect-redis";


import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// ✅ Initialize Redis store (new syntax)
const RedisStore = connectRedis(session);
// Routes
app.use("/api/login", authRoutes);

// DB connection + server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Global Error:", err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
