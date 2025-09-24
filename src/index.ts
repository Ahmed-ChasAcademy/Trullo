import express from "express";
import dotenv from "dotenv";


dotenv.config();

import { connectDB } from "./config/db";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Trullo API is running");
});

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
