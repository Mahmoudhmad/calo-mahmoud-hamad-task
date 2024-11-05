"use client";
import React from "react";

type HandleSubmitType = () => Promise<void>;
interface JobCardProps {
  handleSubmit: HandleSubmitType;
}
const JobHeader = ({ handleSubmit }: JobCardProps) => {
  return (
    <header className=" py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleSubmit()}
          >
            Create Post
          </button>
        </div>
      </div>
    </header>
  );
};

export default JobHeader;
