import express from "express";
import jobRoutes from "./routes/job-routes.js";
import cors from "cors";
const app = express();
const PORT = 4444;
app.use(cors());
app.use(express.json());
app.use("/api/v1", jobRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
