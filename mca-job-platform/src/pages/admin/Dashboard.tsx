import React from 'react';
import { Users, Briefcase, TrendingUp, DollarSign, CheckCircle, XCircle } from 'lucide-react';
import { StatCard } from '../../components/ui/Card';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export const AdminDashboard: React.FC = () => {
  // Mock data - would come from API in production
  const stats = {
    totalUsers: 250,
    totalMCAs: 180,
    totalEmployers: 70,
    activeJobs: 45,
    totalApplications: 320,
    revenue: 15000,
    pendingApprovals: 12,
  };

  const pendingApprovals = [
    { id: 1, name: 'John Doe', type: 'MCA', date: '2024-01-15', paymentStatus: 'PAID' },
    { id: 2, name: 'PharmaCare Ltd', type: 'EMPLOYER', date: '2024-01-14', paymentStatus: 'PAID' },
    { id: 3, name: 'Sarah Johnson', type: 'MCA', date: '2024-01-13', paymentStatus: 'PENDING' },
  ];

  const recentJobs = [
    { id: 1, title: 'Medical Sales Representative', company: 'HealthPlus Pharmacy', status: 'PENDING', applicants: 15 },
    { id: 2, title: 'Senior MCA', company: 'MediPharm Ghana', status: 'ACTIVE', applicants: 28 },
    { id: 3, title: 'MCA - Kumasi', company: 'Wellness Pharmacy', status: 'PENDING', applicants: 12 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard ⚙️</h1>
          <p className="text-gray-600 mt-1">Platform overview and management</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<Users className="h-6 w-6" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Active Jobs"
          value={stats.activeJobs}
          icon={<Briefcase className="h-6 w-6" />}
        />
        <StatCard
          title="Total Applications"
          value={stats.totalApplications}
          icon={<TrendingUp className="h-6 w-6" />}
          trend={{ value: 25, isPositive: true }}
        />
        <StatCard
          title="Revenue (GHS)"
          value={`₵${stats.revenue.toLocaleString()}`}
          icon={<DollarSign className="h-6 w-6" />}
          trend={{ value: 18, isPositive: true }}
        />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-800">Total MCAs</p>
              <p className="mt-1 text-2xl font-bold text-blue-900">{stats.totalMCAs}</p>
            </div>
            <Users className="h-10 w-10 text-blue-600" />
          </div>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-800">Total Employers</p>
              <p className="mt-1 text-2xl font-bold text-green-900">{stats.totalEmployers}</p>
            </div>
            <Briefcase className="h-10 w-10 text-green-600" />
          </div>
        </Card>
        <Card className="bg-yellow-50 border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-800">Pending Approvals</p>
              <p className="mt-1 text-2xl font-bold text-yellow-900">{stats.pendingApprovals}</p>
            </div>
            <CheckCircle className="h-10 w-10 text-yellow-600" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Approvals */}
        <Card title="Pending Approvals" description="Users awaiting verification">
          <div className="space-y-3">
            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{approval.name}</span>
                    <Badge variant={approval.type === 'MCA' ? 'info' : 'success'}>
                      {approval.type}
                    </Badge>
                    <Badge variant={approval.paymentStatus === 'PAID' ? 'success' : 'warning'}>
                      {approval.paymentStatus}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Applied: {approval.date}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="primary" size="sm">
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="danger" size="sm">
                    <XCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Button variant="outline" className="w-full">View All Approvals</Button>
          </div>
        </Card>

        {/* Recent Job Postings */}
        <Card title="Recent Job Postings" description="Latest jobs submitted for approval">
          <div className="space-y-3">
            {recentJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <Badge variant={
                      job.status === 'PENDING' ? 'warning' :
                      job.status === 'ACTIVE' ? 'success' : 'default'
                    }>
                      {job.status}
                    </Badge>
                    <span className="text-xs text-gray-500">👥 {job.applicants} applicants</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="primary" size="sm">Approve</Button>
                  <Button variant="ghost" size="sm">Review</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Button variant="outline" className="w-full">Manage All Jobs</Button>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline">Manage Users</Button>
          <Button variant="outline">Verify Documents</Button>
          <Button variant="outline">Payment History</Button>
          <Button variant="outline">Analytics</Button>
        </div>
      </Card>
    </div>
  );
};
