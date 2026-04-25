import React, { useState } from 'react';
import { Search, MapPin, Briefcase, DollarSign, Filter } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Input';

export const JobListings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  // Mock data - would come from API in production
  const jobs = [
    {
      id: 1,
      title: 'Medical Sales Representative',
      company: 'PharmaCare Ltd',
      location: 'Accra',
      salary: 'GHS 3,000 - 5,000',
      type: 'FULL_TIME',
      posted: '2 days ago',
      description: 'We are looking for an experienced MCA to join our team...',
      requirements: ['Degree in related field', '2+ years experience', 'Valid driver\'s license'],
    },
    {
      id: 2,
      title: 'Senior MCA - Greater Accra',
      company: 'HealthPlus Pharmacy',
      location: 'Accra',
      salary: 'GHS 4,000 - 6,000',
      type: 'FULL_TIME',
      posted: '5 days ago',
      description: 'Join our growing pharmacy chain as a senior medical sales representative...',
      requirements: ['Bachelor\'s degree', '3+ years MCA experience', 'Strong communication skills'],
    },
    {
      id: 3,
      title: 'MCA - Kumasi Region',
      company: 'MediPharm Ghana',
      location: 'Kumasi',
      salary: 'GHS 2,500 - 4,000',
      type: 'FULL_TIME',
      posted: '1 week ago',
      description: 'Exciting opportunity for an MCA in the Kumasi region...',
      requirements: ['Relevant qualification', '1+ years experience', 'Knowledge of local market'],
    },
    {
      id: 4,
      title: 'Part-time Medical Consultant',
      company: 'Wellness Pharmacy',
      location: 'Takoradi',
      salary: 'GHS 1,500 - 2,500',
      type: 'PART_TIME',
      posted: '3 days ago',
      description: 'Part-time position for experienced medical sales professional...',
      requirements: ['Flexible schedule', 'Customer service skills', 'Sales experience'],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Browse Jobs 💼</h1>
        <p className="text-gray-600 mt-1">Find your next opportunity in medical sales</p>
      </div>

      {/* Search & Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Search job titles or companies..."
              icon={<Search className="h-5 w-5" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select
            options={[
              { value: '', label: 'All Locations' },
              { value: 'accra', label: 'Accra' },
              { value: 'kumasi', label: 'Kumasi' },
              { value: 'takoradi', label: 'Takoradi' },
              { value: 'tamale', label: 'Tamale' },
            ]}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Select
            options={[
              { value: '', label: 'All Types' },
              { value: 'FULL_TIME', label: 'Full Time' },
              { value: 'PART_TIME', label: 'Part Time' },
              { value: 'CONTRACT', label: 'Contract' },
              { value: 'REMOTE', label: 'Remote' },
            ]}
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
          <p className="text-sm text-gray-600">{jobs.length} jobs found</p>
        </div>
      </Card>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <Badge variant={job.type === 'FULL_TIME' ? 'success' : 'info'}>
                    {job.type.replace('_', ' ')}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    Posted {job.posted}
                  </div>
                </div>

                <p className="mt-3 text-gray-700 line-clamp-2">{job.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {job.requirements.slice(0, 3).map((req, idx) => (
                    <Badge key={idx} variant="default">{req}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col gap-2">
                <Button>Apply Now</Button>
                <Button variant="outline">Save Job</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="primary" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
};
