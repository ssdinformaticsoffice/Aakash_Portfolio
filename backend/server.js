import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio backend is running.");
});

app.use("/api/contact", contactRoutes);


const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});