"use client";

import {
  Briefcase,
  CalendarDays,
  Clock,
  DollarSign,
  Flag,
  MapPin,
  Share2,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type JobDetailsPageProps = {
  companyLogoUrl: string;
  jobTitle: string;
  companyName: string;
  salaryRange: string;
  jobAttributes: {
    isRemote: boolean;
    jobType: string;
  };
  benefits: string[];
  aboutRole: string[];
  whatWeDo: string[];
  waysToWork: string[];
  sidebarDetails: {
    tag?: string;
    workplace: string;
    jobType: string;
    pay: string;
    publishedDate: string;
    companyWebsite: string;
  };
};

const JobDetailsPage = ({
  companyLogoUrl,
  jobTitle,
  companyName,
  jobAttributes,
  benefits,
  aboutRole,
  whatWeDo,
  waysToWork,
  sidebarDetails,
}: JobDetailsPageProps) => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 font-sans">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content Area */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md md:p-8 lg:col-span-2">
          {/* Header Section */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg">
              {companyLogoUrl ? (
                <Image
                  alt={`${companyName} logo`}
                  className="h-full w-full object-cover"
                  height={64}
                  src={companyLogoUrl}
                  width={64}
                />
              ) : (
                <span className="font-bold text-2xl text-white">T</span>
              )}
            </div>
            <div className="flex-col space-y-4 md:flex-row">
              <div className="flex-grow">
                <h1 className="font-bold text-2xl text-gray-900 leading-tight md:text-3xl">
                  {jobTitle}
                </h1>
                <p className="text-base text-gray-600">{companyName}</p>
              </div>
              <div className="flex flex-shrink-0 items-center gap-2">
                <Button
                  className="rounded-full px-4 py-2 text-gray-700 hover:bg-gray-50"
                  variant="outline"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share job
                </Button>
                <Button className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Apply <Zap className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Job Attributes (below header) */}
          <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 text-sm">
            {jobAttributes.isRemote && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-green-500" />
                <span>Remote</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>{jobAttributes.jobType}</span>
            </div>
          </div>

          {/* Benefits/Requirement */}
          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          {/* About the Role */}
          <h2 className="mb-3 font-semibold text-gray-900 text-xl">
            About the Role:
          </h2>
          {aboutRole.map((paragraph) => (
            <p className="mb-4 text-gray-700 leading-relaxed" key={paragraph}>
              {paragraph}
            </p>
          ))}

          {/* What We Do */}
          <h2 className="mb-3 font-semibold text-gray-900 text-xl">
            What We Do:
          </h2>
          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
            {whatWeDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Ways to Work with Us */}
          <h2 className="mb-3 font-semibold text-gray-900 text-xl">
            Ways to Work with Us:
          </h2>
          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
            {waysToWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Sidebar Area */}
        <div className="flex flex-col gap-8 lg:col-span-1">
          {/* Job Summary Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
            <h3 className="mb-4 font-bold text-gray-900 text-lg">{jobTitle}</h3>
            {sidebarDetails.tag && (
              <span className="mb-4 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 font-semibold text-blue-800">
                {sidebarDetails.tag}
              </span>
            )}
            <ul className="mt-4 space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 flex-shrink-0 text-gray-500" />
                <span className="font-medium">Workplace:</span>{" "}
                {sidebarDetails.workplace}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 text-gray-500" />
                <span className="font-medium">Job Type:</span>{" "}
                {sidebarDetails.jobType}
              </li>
              <li className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 flex-shrink-0 text-gray-500" />
                <span className="font-medium">Pay:</span> {sidebarDetails.pay}
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 flex-shrink-0 text-gray-500" />
                <span className="font-medium">Published on</span>{" "}
                {sidebarDetails.publishedDate}
              </li>
            </ul>
            <Button className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 text-white hover:bg-blue-700">
              Apply <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Company Information Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg">
                {companyLogoUrl ? (
                  <Image
                    alt={`${companyName} logo`}
                    className="h-full w-full object-cover"
                    height={64}
                    src={companyLogoUrl}
                    width={64}
                  />
                ) : (
                  <span className="font-bold text-2xl text-white">T</span>
                )}
              </div>
              <p className="font-semibold text-gray-900 text-lg">
                {companyName}
              </p>
            </div>
            {sidebarDetails.companyWebsite && (
              <p className="mb-4 text-gray-600 text-sm">
                <span className="font-medium">Website: </span>{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href={`http://${sidebarDetails.companyWebsite}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {sidebarDetails.companyWebsite}
                </a>
              </p>
            )}
            <Link href="/companies/123">
              <Button
                className="w-full rounded-lg border-blue-600 py-2.5 text-blue-600 hover:bg-blue-50"
                variant="outline"
              >
                <span>View company</span>
              </Button>
            </Link>
          </div>

          {/* Report Job Link */}
          <div className="mt-4 text-center">
            <Button className="text-gray-600 hover:text-red-800" variant="link">
              <Flag className="mr-2 h-4 w-4" />
              Report this job
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
