import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
