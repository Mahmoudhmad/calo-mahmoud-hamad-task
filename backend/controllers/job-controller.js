import { v4 as uuidv4 } from "uuid";
import { readJobs, addJob, updateJob } from "../utils/file-storage.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const fetchRandomUnsplashImage = async () => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?count=3&query=food`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );
    const imageUrls = response.data.map((image) => image.urls.regular);
    return imageUrls;
  } catch (error) {
    console.log("error ", error);
  }
};

export const createJob = async (req, res) => {
  try {
    const jobId = uuidv4();
    const imageUrl = await fetchRandomUnsplashImage();
    const newJob = {
      id: jobId,
      status: "pending",
      images: imageUrl,
      createdAt: new Date(),
    };

    await addJob(newJob);

    res.status(201).json({ jobId: newJob.id });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Failed to create job" });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await readJobs();
    res.json(jobs);
  } catch (error) {
    console.error("Error retrieving jobs:", error);
    res.status(500).json({ error: "Failed to retrieve jobs" });
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobs = await readJobs();
    const job = jobs.find((j) => j.id === req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch (error) {
    console.error("Error retrieving job:", error);
    res.status(500).json({ error: "Failed to retrieve job" });
  }
};
