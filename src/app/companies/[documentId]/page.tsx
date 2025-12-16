import { CompanyOverviewPage } from "@/components/company-overview-page";

const exampleCompanyData = {
  id: "company123",
  companyLogoUrl: "https://placehold.co/100x100",
  companyName: "TechCorp Inc.",
  totalJobs: 5,
  overviewContent: {
    about: [
      "TechCorp Inc. is a leading technology company specializing in innovative software solutions.",
      "Founded in 2010, we have consistently delivered cutting-edge products to clients worldwide.",
    ],
  },
  jobs: [
    {
      id: "1",
      timePosted: "3 days ago",
      tags: ["onsite - Seattel, WA"],
      companyLogoUrl: "https://placehold.co/64x64/0047AB/FFFFFF.png?text=M",
      jobTitle: "Senior Software Engineer",
      companyName: "TechCorp Inc.",
      salaryRange: "$120,000 - $150,000",
      isQuickApply: true,
      isRemote: false,
      location: "Seattle, WA",
      jobType: "Full-time",
    },
    {
      id: "2",
      timePosted: "3 days ago",
      tags: ["onsite - Seattel, WA"],
      companyLogoUrl: "https://placehold.co/64x64/0047AB/FFFFFF.png?text=M",
      jobTitle: "Senior Software Engineer",
      companyName: "TechCorp Inc.",
      salaryRange: "$120,000 - $150,000",
      isQuickApply: true,
      isRemote: false,
      location: "Seattle, WA",
      jobType: "Full-time",
    },
    {
      id: "3",
      timePosted: "3 days ago",
      tags: ["onsite - Seattel, WA"],
      companyLogoUrl: "https://placehold.co/64x64/0047AB/FFFFFF.png?text=M",
      jobTitle: "Senior Software Engineer",
      companyName: "TechCorp Inc.",
      salaryRange: "$120,000 - $150,000",
      isQuickApply: true,
      isRemote: false,
      location: "Seattle, WA",
      jobType: "Full-time",
    },
    {
      id: "4",
      timePosted: "3 days ago",
      tags: ["onsite - Seattel, WA"],
      companyLogoUrl: "https://placehold.co/64x64/0047AB/FFFFFF.png?text=M",
      jobTitle: "Senior Software Engineer",
      companyName: "TechCorp Inc.",
      salaryRange: "$120,000 - $150,000",
      isQuickApply: true,
      isRemote: false,
      location: "Seattle, WA",
      jobType: "Full-time",
    },
    {
      id: "5",
      timePosted: "3 days ago",
      tags: ["onsite - Seattel, WA"],
      companyLogoUrl: "https://placehold.co/64x64/0047AB/FFFFFF.png?text=M",
      jobTitle: "Senior Software Engineer",
      companyName: "TechCorp Inc.",
      salaryRange: "$120,000 - $150,000",
      isQuickApply: true,
      isRemote: false,
      location: "Seattle, WA",
      jobType: "Full-time",
    },
  ],
  sidebarDetails: {
    companyWebsite: "https://techcorp.example.com",
  },
};

const CompanyPage = () => <CompanyOverviewPage {...exampleCompanyData} />;

export default CompanyPage;
