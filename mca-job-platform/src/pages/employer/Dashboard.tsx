import React from 'react';
import { Briefcase, Users, Calendar, DollarSign } from 'lucide-react';
import { StatCard } from '../../components/ui/Card';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export const EmployerDashboard: React.FC = () => {
  // Mock data - would come from API in production
  const stats = {
    activeJobs: 8,
    totalApplicants: 45,
    interviewsScheduled: 12,
    pendingApproval: 3,
  };

  const recentApplicants = [
    { id: 1, name: 'Sarah Johnson', job: 'Medical Sales Representative', status: 'PENDING', date: '2024-01-15' },
    { id: 2, name: 'Michael Osei', job: 'MCA - Kumasi', status: 'REVIEWED', date: '2024-01-14' },
    { id: 3, name: 'Grace Mensah', job: 'Senior MCA', status: 'INTERVIEW_SCHEDULED', date: '2024-01-13' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employer Dashboard 🏢</h1>
          <p className="text-gray-600 mt-1">Manage your jobs and applicants</p>
        </div>
        <Button>Post New Job</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Jobs"
          value={stats.activeJobs}
          icon={<Briefcase className="h-6 w-6" />}
        />
        <StatCard
          title="Total Applicants"
          value={stats.totalApplicants}
          icon={<Users className="h-6 w-6" />}
          trend={{ value: 22, isPositive: true }}
        />
        <StatCard
          title="Interviews Scheduled"
          value={stats.interviewsScheduled}
          icon={<Calendar className="h-6 w-6" />}
        />
        <StatCard
          title="Pending Approval"
          value={stats.pendingApproval}
          icon={<DollarSign className="h-6 w-6" />}
        />
      </div>

      {/* Recent Applicants */}
      <Card title="Recent Applicants" description="Latest candidates for your positions">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Candidate</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Position</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date Applied</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentApplicants.map((applicant) => (
                <tr key={applicant.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{applicant.name}</div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{applicant.job}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{applicant.date}</td>
                  <td className="py-3 px-4">
                    <Badge variant={
                      applicant.status === 'PENDING' ? 'warning' :
                      applicant.status === 'REVIEWED' ? 'info' :
                      applicant.status === 'INTERVIEW_SCHEDULED' ? 'success' : 'default'
                    }>
                      {applicant.status.replace('_', ' ')}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">View Profile</Button>
                      <Button variant="primary" size="sm">Schedule</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Active Jobs Preview */}
      <Card title="Your Active Jobs" description="Current job postings">
        <div className="space-y-4">
          {[1, 2, 3].map((job) => (
            <div key={job} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">Medical Sales Representative</h4>
                <p className="text-sm text-gray-600">Greater Accra Region • Full Time</p>
                <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                  <span>👥 15 applicants</span>
                  <span>📅 Posted 5 days ago</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-center p-4">
            <Briefcase className="h-10 w-10 mx-auto text-primary mb-3" />
            <h3 className="font-semibold text-gray-900">Post a Job</h3>
            <p className="text-sm text-gray-600 mt-1">Create new listing</p>
          </div>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-center p-4">
            <Users className="h-10 w-10 mx-auto text-secondary mb-3" />
            <h3 className="font-semibold text-gray-900">Browse Candidates</h3>
            <p className="text-sm text-gray-600 mt-1">Find qualified MCAs</p>
          </div>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-center p-4">
            <Calendar className="h-10 w-10 mx-auto text-accent mb-3" />
            <h3 className="font-semibold text-gray-900">Interviews</h3>
            <p className="text-sm text-gray-600 mt-1">Manage schedules</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
