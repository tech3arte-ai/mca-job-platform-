import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (data: any) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),
  refreshToken: () => api.post('/auth/refresh-token'),
};

// User APIs
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data: any) => api.put('/users/profile', data),
  uploadDocument: (formData: FormData) =>
    api.post('/users/documents', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  getDocuments: () => api.get('/users/documents'),
};

// Job APIs
export const jobAPI = {
  getAll: (params?: any) => api.get('/jobs', { params }),
  getById: (id: string) => api.get(`/jobs/${id}`),
  create: (data: any) => api.post('/jobs', data),
  update: (id: string, data: any) => api.put(`/jobs/${id}`, data),
  delete: (id: string) => api.delete(`/jobs/${id}`),
  getMyJobs: () => api.get('/jobs/my-jobs'),
  getApplicants: (jobId: string) => api.get(`/jobs/${jobId}/applicants`),
};

// Application APIs
export const applicationAPI = {
  apply: (jobId: string, data: any) => api.post(`/jobs/${jobId}/apply`, data),
  getMyApplications: () => api.get('/applications/my-applications'),
  getById: (id: string) => api.get(`/applications/${id}`),
  updateStatus: (id: string, status: string) =>
    api.patch(`/applications/${id}/status`, { status }),
};

// Message APIs
export const messageAPI = {
  getConversations: () => api.get('/messages/conversations'),
  getMessages: (userId: string) => api.get(`/messages/${userId}`),
  sendMessage: (receiverId: string, content: string) =>
    api.post('/messages', { receiverId, content }),
  markAsRead: (messageId: string) => api.patch(`/messages/${messageId}/read`),
};

// Interview APIs
export const interviewAPI = {
  schedule: (applicationId: string, data: any) =>
    api.post(`/interviews/${applicationId}`, data),
  getMyInterviews: () => api.get('/interviews/my-interviews'),
  updateStatus: (id: string, status: string) =>
    api.patch(`/interviews/${id}/status`, { status }),
};

// Payment APIs
export const paymentAPI = {
  initialize: (data: any) => api.post('/payments/initialize', data),
  verify: (reference: string) => api.get(`/payments/verify/${reference}`),
  getHistory: () => api.get('/payments/history'),
};

// Admin APIs
export const adminAPI = {
  getDashboardStats: () => api.get('/admin/stats'),
  getAllUsers: () => api.get('/admin/users'),
  approveUser: (userId: string) => api.patch(`/admin/users/${userId}/approve`),
  rejectUser: (userId: string) => api.patch(`/admin/users/${userId}/reject`),
  getAllJobs: () => api.get('/admin/jobs'),
  approveJob: (jobId: string) => api.patch(`/admin/jobs/${jobId}/approve`),
  rejectJob: (jobId: string) => api.patch(`/admin/jobs/${jobId}/reject`),
  getPayments: () => api.get('/admin/payments'),
};
