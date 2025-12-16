import { JobCard } from "@/components/job-card";
import { JobSearch } from "@/components/job-search";

const Home = () => {
  const exampleJob = {
    id: "1",
    timePosted: "2 days ago",
    tags: ["Entry Level", "Senior"],
    companyLogoUrl: "https://placehold.co/64x64/0047AB/FFFFFF.png?text=TC",
    jobTitle: "Frontend Developer",
    companyName: "Tech Corp",
    salaryRange: "$70k - $90k",
    isRemote: true,
    jobType: "Full-time",
  };
  return (
    <div className="px-4 lg:px-0">
      <JobSearch />
      <JobCard {...exampleJob} />
      <JobCard {...exampleJob} />
      <JobCard {...exampleJob} />
    </div>
  );
};

export default Home;
