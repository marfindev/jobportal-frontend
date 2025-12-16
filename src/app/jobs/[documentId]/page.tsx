import JobDetailsPage from "@/components/job-details-page";

const JobDetails = () => {
  const exampleJobDetails = {
    companyLogoUrl: "https://placehold.co/64x64/0047AB/FFFFFF.png?text=M",
    jobTitle: "Senior Software Engineer",
    companyName: "TechCorp Inc.",
    salaryRange: "$120,000 - $150,000",
    jobAttributes: {
      isRemote: true,
      jobType: "Full-time",
    },
    benefits: [
      "Health, Dental, and Vision Insurance",
      "401(k) with Company Match",
      "Flexible Work Hours",
      "Professional Development Stipend",
    ],
    aboutRole: [
      "Lead the development of cutting-edge web applications using modern frameworks.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
      "Mentor junior developers and conduct code reviews to ensure code quality.",
      "Participate in architecture discussions and contribute to technical decision-making.",
    ],
    whatWeDo: [
      "At TechCorp Inc., we are dedicated to building innovative software solutions that empower businesses worldwide.",
      "Our mission is to leverage technology to solve real-world problems and drive digital transformation.",
      "We foster a collaborative and inclusive work environment where creativity and innovation thrive.",
      "Join us in our journey to make a significant impact in the tech industry.",
    ],
    waysToWork: [
      "We offer flexible work arrangements, including remote work options and hybrid models.",
      "Our team values work-life balance and encourages employees to find a rhythm that suits them best.",
    ],
    sidebarDetails: {
      tag: "Full-time",
      workplace: "Remote",
      jobType: "Software Development",
      pay: "$120,000 - $150,000",
      publishedDate: "2 days ago",
      companyWebsite: "https://techcorp.example.com",
    },
  };
  return <JobDetailsPage {...exampleJobDetails} />;
};

export default JobDetails;
