import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "..", "data", "jobs.json");
// ! read job
export const readJobs = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(filePath, JSON.stringify([]), "utf8");
      return [];
    }
    throw error;
  }
};

export const writeJobs = async (jobs) => {
  await fs.writeFile(filePath, JSON.stringify(jobs, null, 2), "utf8");
};

// ! create job
export async function addJob(job) {
  const jobs = await readJobs();
  jobs.push(job);
  await writeJobs(jobs);
}
// ! update job
export const updateJob = async (jobId, updates) => {
  const jobs = await readJobs();
  const jobIndex = jobs.findIndex((job) => job.id === jobId);

  if (jobIndex === -1) {
    throw new Error("Job not found");
  }

  jobs[jobIndex] = {
    ...jobs[jobIndex],
    ...updates,
  };

  await writeJobs(jobs);
};
