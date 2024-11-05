import Image from "next/image";
interface JobProps {
  id: string;
  status: string;
  images: string[];
  createdAt: string;
}
interface JobsCardProps {
  job: JobProps;
}
const JobCard = ({ job }: JobsCardProps) => {
  console.log(job.images?.[1]);
  return (
    <div className="max-w-sm w-full rounded overflow-hidden shadow-lg">
      <Image
        className="w-full h-60 object-cover"
        src={job?.images?.[0] || "/fallback-image.jpg"}
        overrideSrc={job?.images?.[0]}
        alt="Sunset in the mountains"
        width={200}
        height={200}
      />
      <div className="px-6 py-4 h-32 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{job.id}</div>
          <p className="text-gray-700 text-base"></p>
        </div>
        <div className="pt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {job.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
