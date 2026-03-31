import express from "express";
import postRoutes from "./routes/posts.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/posts", postRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Blogify API is running...");
});

export default app;