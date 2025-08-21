import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Settings, User, Shield } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v6m0 0l3-3m-3 3L9 6m3 6v6m0-6l3 3m-3-3L9 15" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Family Tree</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isAdmin && (
              <Link
                to="/admin"
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            )}
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
                ) : (
                  <User className="w-4 h-4 text-gray-600" />
                )}
              </div>
              <span className="text-sm font-medium text-gray-700">{user?.displayName || user?.email}</span>
            </div>

            <button
              onClick={handleSignOut}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}