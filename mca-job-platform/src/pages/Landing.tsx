import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Shield, TrendingUp, CheckCircle, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">MCA Job Platform</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect Medical Sales Reps<br />with Top Employers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Ghana's trusted platform for Medical Care Attendants (MCAs) and 
              Pharmaceutical companies to find perfect matches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Find a Job
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Post a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-gray-600 mt-2">Registered MCAs</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">150+</p>
              <p className="text-gray-600 mt-2">Employers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">1000+</p>
              <p className="text-gray-600 mt-2">Jobs Posted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">85%</p>
              <p className="text-gray-600 mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MCA Job Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for Ghana's pharmaceutical industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Profiles</h3>
              <p className="text-gray-600">
                All users are verified through our rigorous approval process to ensure trust and safety
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Communication</h3>
              <p className="text-gray-600">
                Chat directly with employers or candidates to discuss opportunities
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Application</h3>
              <p className="text-gray-600">
                Apply to multiple jobs with your pre-filled profile and documents
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Track your applications and get insights into your job search performance
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Briefcase className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Jobs</h3>
              <p className="text-gray-600">
                All job postings are reviewed to prevent scams and ensure legitimacy
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Support</h3>
              <p className="text-gray-600">
                Dedicated Ghana-based support team ready to assist you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For MCAs */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">For Medical Sales Reps</h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Create Account', desc: 'Register and complete your profile with certifications' },
                  { step: 2, title: 'Browse Jobs', desc: 'Search and filter jobs that match your skills' },
                  { step: 3, title: 'Apply', desc: 'Submit applications with your CV and documents' },
                  { step: 4, title: 'Get Hired', desc: 'Communicate with employers and schedule interviews' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Employers */}
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">For Employers</h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Register Company', desc: 'Create account and verify your business license' },
                  { step: 2, title: 'Post Jobs', desc: 'Create detailed job listings for open positions' },
                  { step: 3, title: 'Review Applicants', desc: 'Browse qualified candidate profiles' },
                  { step: 4, title: 'Hire Talent', desc: 'Schedule interviews and make offers' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of MCAs and employers already using our platform
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
                <span className="ml-2 text-lg font-bold">MCA Job Platform</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting medical sales professionals with opportunities across Ghana
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/jobs" className="hover:text-white">Browse Jobs</Link></li>
                <li><Link to="/register" className="hover:text-white">Register</Link></li>
                <li><Link to="/login" className="hover:text-white">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Accra, Ghana</li>
                <li>support@mcajobs.gh</li>
                <li>+233 XX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 MCA Job Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
