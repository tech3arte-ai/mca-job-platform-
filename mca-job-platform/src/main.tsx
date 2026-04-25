import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { Landing } from './pages/Landing'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Payment } from './pages/auth/Payment'
import { MCADashboard } from './pages/mca/Dashboard'
import { EmployerDashboard } from './pages/employer/Dashboard'
import { AdminDashboard } from './pages/admin/Dashboard'
import { JobListings } from './pages/jobs/JobListings'
import { DashboardLayout } from './components/layout/DashboardLayout'
import { useAuthStore } from './store/authStore'

// Protected Route Component
const ProtectedRoute: React.FC<{ 
  children: React.ReactNode; 
  requiredRole?: 'MCA' | 'EMPLOYER' | 'ADMIN';
  requireApproval?: boolean;
}> = ({ children, requiredRole, requireApproval }) => {
  const { isAuthenticated, user } = useAuthStore();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }
  
  if (requireApproval && !user?.isApproved) {
    return <Navigate to="/payment" replace />;
  }
  
  return <DashboardLayout>{children}</DashboardLayout>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/jobs" element={<JobListings />} />
        
        {/* MCA Routes */}
        <Route 
          path="/mca/dashboard" 
          element={
            <ProtectedRoute requiredRole="MCA">
              <MCADashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Employer Routes */}
        <Route 
          path="/employer/dashboard" 
          element={
            <ProtectedRoute requiredRole="EMPLOYER">
              <EmployerDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Admin Routes */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute requiredRole="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
