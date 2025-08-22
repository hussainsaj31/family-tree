import React from 'react';
import { Users, TreePine, Shield, Activity } from 'lucide-react';
import Header from '../components/Header';

export default function AdminDashboard() {
  // Mock data for admin dashboard
  const stats = {
    totalUsers: 1247,
    totalTrees: 892,
    activeUsers: 156,
    blockedTrees: 3,
  };

  const recentUsers = [
    { id: '1', email: 'john.doe@example.com', displayName: 'John Doe', createdAt: new Date('2024-01-20'), treesCount: 2 },
    { id: '2', email: 'jane.smith@example.com', displayName: 'Jane Smith', createdAt: new Date('2024-01-19'), treesCount: 1 },
    { id: '3', email: 'bob.johnson@example.com', displayName: 'Bob Johnson', createdAt: new Date('2024-01-18'), treesCount: 3 },
  ];

  const recentTrees = [
    { id: '1', name: 'Smith Family Heritage', owner: 'jane.smith@example.com', members: 15, createdAt: new Date('2024-01-20'), isBlocked: false },
    { id: '2', name: 'Johnson Ancestry', owner: 'bob.johnson@example.com', members: 8, createdAt: new Date('2024-01-19'), isBlocked: false },
    { id: '3', name: 'Brown Family Tree', owner: 'alice.brown@example.com', members: 22, createdAt: new Date('2024-01-18'), isBlocked: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-paynes-gray" />
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <p className="mt-2 text-gray-600">
            Monitor and manage the Family Tree platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-paynes-gray" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center">
                <TreePine className="w-6 h-6 text-cadet-gray" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Trees</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalTrees.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-beige rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-paynes-gray" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeUsers.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-bittersweet/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-bittersweet" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Blocked Trees</p>
                <p className="text-2xl font-bold text-gray-900">{stats.blockedTrees}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Users */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Users</h2>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{user.displayName}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">
                      Joined {user.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {user.treesCount} {user.treesCount === 1 ? 'tree' : 'trees'}
                    </p>
                    <button className="text-xs text-paynes-gray hover:text-cadet-gray">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Trees */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Trees</h2>
            <div className="space-y-4">
              {recentTrees.map((tree) => (
                <div key={tree.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-gray-900">{tree.name}</p>
                      {tree.isBlocked && (
                        <span className="px-2 py-1 text-xs bg-bittersweet/20 text-bittersweet rounded-full">
                          Blocked
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">Owner: {tree.owner}</p>
                    <p className="text-xs text-gray-500">
                      Created {tree.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {tree.members} members
                    </p>
                    <div className="flex space-x-2 mt-1">
                      <button className="text-xs text-paynes-gray hover:text-cadet-gray">
                        View
                      </button>
                      <button className="text-xs text-bittersweet hover:text-bittersweet/90">
                        {tree.isBlocked ? 'Unblock' : 'Block'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Management Section */}
        <div className="mt-8">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">User Management</h2>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="Search users by email..."
                className="input flex-1"
              />
              <button className="btn bg-paynes-gray text-white hover:bg-paynes-gray/90">Search</button>
            </div>
            <div className="text-center py-8 text-gray-500">
              User search and management interface will be implemented here.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}