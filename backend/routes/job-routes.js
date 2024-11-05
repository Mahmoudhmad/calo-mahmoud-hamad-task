import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
} from "../controllers/job-controller.js";
const router = express.Router();
router.post("/jobs", createJob);
router.get("/jobs", getJobs); 
router.get("/jobs/:id", getJobById);

export default router;
