export type UserRole = 'MCA' | 'EMPLOYER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isApproved: boolean;
  isVerified: boolean;
  createdAt: string;
}

export interface MCAProfile extends User {
  role: 'MCA';
  phone?: string;
  bio?: string;
  experience?: string;
  certifications?: string[];
  cvUrl?: string;
  documents?: Document[];
  applications?: Application[];
}

export interface EmployerProfile extends User {
  role: 'EMPLOYER';
  companyName: string;
  companyType: 'PHARMACY' | 'PHARMA_COMPANY';
  licenseNumber?: string;
  licenseDocument?: string;
  phone?: string;
  address?: string;
  jobs?: Job[];
}

export interface AdminProfile extends User {
  role: 'ADMIN';
}

export interface Document {
  id: string;
  userId: string;
  type: 'CV' | 'CERTIFICATE' | 'ID' | 'LICENSE';
  url: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  uploadedAt: string;
}

export interface Job {
  id: string;
  employerId: string;
  employer: EmployerProfile;
  title: string;
  description: string;
  location: string;
  salary?: string;
  jobType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'REMOTE';
  category: string;
  requirements: string[];
  status: 'DRAFT' | 'PENDING' | 'ACTIVE' | 'CLOSED';
  applicants?: Application[];
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: string;
  jobId: string;
  mcaId: string;
  mca: MCAProfile;
  status: 'PENDING' | 'REVIEWED' | 'INTERVIEW_SCHEDULED' | 'ACCEPTED' | 'REJECTED';
  coverLetter?: string;
  appliedAt: string;
  interviewDate?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  isRead: boolean;
  createdAt: string;
}

export interface Interview {
  id: string;
  applicationId: string;
  employerId: string;
  mcaId: string;
  scheduledDate: string;
  timeSlot: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED' | 'RESCHEDULED';
  notes?: string;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: 'GHS';
  purpose: 'MCA_REGISTRATION' | 'JOB_POSTING';
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  paystackReference?: string;
  paidAt?: string;
}

export interface DashboardStats {
  totalUsers?: number;
  totalMCAs?: number;
  totalEmployers?: number;
  activeJobs?: number;
  totalApplications?: number;
  revenue?: number;
  pendingApprovals?: number;
}
