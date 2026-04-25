import React, { useState } from 'react';
import { Menu, X, Bell, User, LogOut, ChevronDown } from 'lucide-react';
import { useAuthStore, useRole } from '../../store/authStore';
import { Avatar } from '../ui/Badge';
import { cn } from '../../utils/helpers';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const role = useRole();
  const { logout } = useAuthStore();

  const getMenuItems = () => {
    switch (role) {
      case 'MCA':
        return [
          { label: 'Dashboard', href: '/mca/dashboard', icon: '📊' },
          { label: 'My Applications', href: '/mca/applications', icon: '📝' },
          { label: 'Profile', href: '/mca/profile', icon: '👤' },
          { label: 'Messages', href: '/mca/messages', icon: '💬' },
          { label: 'Documents', href: '/mca/documents', icon: '📄' },
          { label: 'Settings', href: '/mca/settings', icon: '⚙️' },
        ];
      case 'EMPLOYER':
        return [
          { label: 'Dashboard', href: '/employer/dashboard', icon: '📊' },
          { label: 'Manage Jobs', href: '/employer/jobs', icon: '💼' },
          { label: 'Applicants', href: '/employer/applicants', icon: '👥' },
          { label: 'Messages', href: '/employer/messages', icon: '💬' },
          { label: 'Interviews', href: '/employer/interviews', icon: '📅' },
          { label: 'Settings', href: '/employer/settings', icon: '⚙️' },
        ];
      case 'ADMIN':
        return [
          { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
          { label: 'Users', href: '/admin/users', icon: '👥' },
          { label: 'Jobs', href: '/admin/jobs', icon: '💼' },
          { label: 'Applications', href: '/admin/applications', icon: '📝' },
          { label: 'Payments', href: '/admin/payments', icon: '💰' },
          { label: 'Analytics', href: '/admin/analytics', icon: '📈' },
          { label: 'Settings', href: '/admin/settings', icon: '⚙️' },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary">MCA Jobs</h1>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={() => {
              logout();
              window.location.href = '/login';
            }}
            className="flex items-center w-full px-4 py-3 text-danger rounded-lg hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { user } = useAuthStore();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side */}
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 mr-4"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-semibold text-gray-800 hidden sm:block">
            MCA Job Platform
          </h2>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-danger rounded-full"></span>
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
            >
              <Avatar alt={user?.name || 'User'} size="sm" />
              <span className="hidden md:block font-medium text-gray-700">
                {user?.name}
              </span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowDropdown(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <a
                    href={`/${user?.role === 'MCA' ? 'mca' : user?.role === 'EMPLOYER' ? 'employer' : 'admin'}/profile`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </div>
                  </a>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-danger hover:bg-red-50"
                    onClick={() => {
                      useAuthStore.getState().logout();
                    }}
                  >
                    <div className="flex items-center">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </div>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col lg:ml-0">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
