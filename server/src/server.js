// server/server.js
import express from "express";
import dotenv from 'dotenv'; 
import cors from "cors";
import userroutes from "./routes/user.routes.js";
import { connectdb } from "./db/db.js";
dotenv.config({
  path: './.env' 
});
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connectdb();
app.use("/api/data", userroutes);
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
