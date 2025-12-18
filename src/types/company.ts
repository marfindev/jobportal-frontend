export type Company = {
  id: number;
  documentId: string;
  companyName: string;
  companyWebsite: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: number;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        sizeInBytes: number;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: unknown | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  about: {
    id: number;
    text: string;
  }[];
  jobs: {
    id: number;
    documentId: string;
    jobTitle: string;
    salaryRange: string;
    jobType: string;
    workplace: string;
    seniority: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
};

export type CompanyOverviewPageProps = {
  id?: number;
  documentId?: string;
  companyLogoUrl?: string;
  companyName: string;
  totalJobs: number;
  overviewContent: {
    about: string[];
  };
  jobs: {
    id: number;
    documentId: string;
    timePosted: string;
    tags: string[];
    companyLogoUrl: string;
    jobTitle: string;
    companyName: string;
    salaryRange: string;
    isRemote: boolean;
    location: string;
    jobType: string;
  }[];
  sidebarDetails: {
    companyWebsite: string;
  };
};
