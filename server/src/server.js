// server/server.js
import express from "express";
import dotenv from 'dotenv'; 
import cors from "cors";
import router from "./routes/user.routes.js";
import { connectdb } from "./db/db.js";
import sos from "./routes/sos.routes.js"
import newsRoutes from "./routes/news.routes.js"
import complaintroutes from "./routes/complaint.routes.js";
dotenv.config({
  path: './.env' 
});
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectdb();
app.use("/api/v1/users", router);
app.use("/api/v1/cases", complaintroutes);
app.use("/api/v1/sos", sos);
app.use("/api/news", newsRoutes);



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
