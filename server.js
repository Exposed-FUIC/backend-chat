import express from "express";
import dotenv from "dotenv";

// import { connectDB } from "./config/db.js";

// .env
dotenv.config();

// Initialize express
const app = express();

// allows to accept json data in req.body
app.use(express.json());

// Routes 
app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "Backend is working" });
});

// Invalid Routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// listen to port
app.listen(5550, () => {
//   connectDB();
  console.log("Server started at http://localhost:5550");
})