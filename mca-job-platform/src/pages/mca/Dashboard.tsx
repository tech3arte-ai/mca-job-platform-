import React from 'react';
import { Briefcase, Users, TrendingUp, DollarSign } from 'lucide-react';
import { StatCard } from '../../components/ui/Card';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export const MCADashboard: React.FC = () => {
  // Mock data - would come from API in production
  const stats = {
    applicationsSent: 12,
    interviewsScheduled: 3,
    messages: 5,
    profileViews: 48,
  };

  const recentApplications = [
    { id: 1, job: 'Medical Sales Representative', company: 'PharmaCare Ltd', status: 'PENDING', date: '2024-01-15' },
    { id: 2, job: 'MCA - Greater Accra', company: 'HealthPlus Pharmacy', status: 'REVIEWED', date: '2024-01-14' },
    { id: 3, job: 'Senior MCA', company: 'MediPharm Ghana', status: 'INTERVIEW_SCHEDULED', date: '2024-01-12' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, John! 👋</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your job search</p>
        </div>
        <Button>Update Profile</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Applications Sent"
          value={stats.applicationsSent}
          icon={<Briefcase className="h-6 w-6" />}
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Interviews Scheduled"
          value={stats.interviewsScheduled}
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard
          title="Messages"
          value={stats.messages}
          icon={<TrendingUp className="h-6 w-6" />}
        />
        <StatCard
          title="Profile Views"
          value={stats.profileViews}
          icon={<DollarSign className="h-6 w-6" />}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      {/* Recent Applications */}
      <Card title="Recent Applications" description="Track your latest job applications">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Job Title</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Company</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date Applied</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app) => (
                <tr key={app.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{app.job}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{app.company}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{app.date}</td>
                  <td className="py-3 px-4">
                    <Badge variant={
                      app.status === 'PENDING' ? 'warning' :
                      app.status === 'REVIEWED' ? 'info' :
                      app.status === 'INTERVIEW_SCHEDULED' ? 'success' : 'default'
                    }>
                      {app.status.replace('_', ' ')}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-center p-4">
            <Briefcase className="h-10 w-10 mx-auto text-primary mb-3" />
            <h3 className="font-semibold text-gray-900">Browse Jobs</h3>
            <p className="text-sm text-gray-600 mt-1">Find new opportunities</p>
          </div>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-center p-4">
            <Users className="h-10 w-10 mx-auto text-secondary mb-3" />
            <h3 className="font-semibold text-gray-900">Messages</h3>
            <p className="text-sm text-gray-600 mt-1">Chat with employers</p>
          </div>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-center p-4">
            <TrendingUp className="h-10 w-10 mx-auto text-accent mb-3" />
            <h3 className="font-semibold text-gray-900">Analytics</h3>
            <p className="text-sm text-gray-600 mt-1">View your performance</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
