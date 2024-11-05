"use client";
import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import JobCard from "./JobCard";
import JobHeader from "./JobHeader";
interface JobProps {
  id: string;
  status: string;
  images: string[];
  createdAt: string;
}
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs`
      );
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSubmit = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs`
    );
    fetchJobs();
    console.log("response", response);
  };

  return (
    <>
      <JobHeader handleSubmit={handleSubmit} />
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <h1 className="text-4xl font-bold mb-4">Job List</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job: JobProps) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </>
  );
};
export default Jobs;
