import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Building } from 'lucide-react';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Select } from '../../components/ui/Input';
import { authAPI } from '../../services/api';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState<'MCA' | 'EMPLOYER'>('MCA');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    companyName: '',
    companyType: 'PHARMACY',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const registerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role,
        ...(role === 'MCA' && { phone: formData.phone }),
        ...(role === 'EMPLOYER' && {
          companyName: formData.companyName,
          companyType: formData.companyType,
        }),
      };

      await authAPI.register(registerData);
      
      // Redirect to payment page after registration
      navigate('/payment', { 
        state: { 
          role, 
          amount: role === 'MCA' ? 100 : 500 // GHS amounts
        } 
      });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4 py-8">
      <Card className="w-full max-w-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">MCA Job Platform</h1>
          <p className="text-gray-600">Create your account</p>
        </div>

        {/* Role Selection */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setRole('MCA')}
            className={`p-4 rounded-lg border-2 transition-colors ${
              role === 'MCA'
                ? 'border-primary bg-primary/10'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <User className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="font-medium">MCA Applicant</p>
            <p className="text-xs text-gray-500 mt-1">Medical Sales Rep</p>
          </button>
          <button
            type="button"
            onClick={() => setRole('EMPLOYER')}
            className={`p-4 rounded-lg border-2 transition-colors ${
              role === 'EMPLOYER'
                ? 'border-primary bg-primary/10'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Building className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="font-medium">Employer</p>
            <p className="text-xs text-gray-500 mt-1">Pharmacy/Company</p>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-danger text-sm">
              {error}
            </div>
          )}

          <Input
            id="name"
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            icon={<User className="h-5 w-5" />}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            icon={<Mail className="h-5 w-5" />}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          {role === 'MCA' ? (
            <Input
              id="phone"
              type="tel"
              label="Phone Number"
              placeholder="+233 XX XXX XXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          ) : (
            <>
              <Input
                id="companyName"
                type="text"
                label="Company Name"
                placeholder="Enter company name"
                icon={<Building className="h-5 w-5" />}
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required={role === 'EMPLOYER'}
              />
              <Select
                id="companyType"
                label="Company Type"
                options={[
                  { value: 'PHARMACY', label: 'Pharmacy' },
                  { value: 'PHARMA_COMPANY', label: 'Pharmaceutical Company' },
                ]}
                value={formData.companyType}
                onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
              />
            </>
          )}

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              placeholder="Create a password"
              icon={<Lock className="h-5 w-5" />}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <Input
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            icon={<Lock className="h-5 w-5" />}
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />

          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Registration Fee:</strong>{' '}
              {role === 'MCA' ? 'GHS 100' : 'GHS 500'}
            </p>
            <p className="text-xs text-blue-600 mt-1">
              Payment required before account activation
            </p>
          </div>

          <Button type="submit" className="w-full" isLoading={isLoading}>
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};
