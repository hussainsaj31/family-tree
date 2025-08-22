import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Users, Calendar, Share2 } from 'lucide-react';
import Header from '../components/Header';
import { useAuth } from '../hooks/useAuth';
import { useTree } from '../contexts/TreeContext';
import CreateTreeModal from '../components/CreateTreeModal';

export default function DashboardPage() {
  const { user } = useAuth();
  const { trees, createTree } = useTree();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.displayName || user?.email}!
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your family trees and discover your heritage.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-paynes-gray" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Family Members</p>
                <p className="text-2xl font-bold text-gray-900">
                  {trees.reduce((sum, tree) => sum + (tree.members?.length || 0), 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-cadet-gray" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Family Trees</p>
                <p className="text-2xl font-bold text-gray-900">{trees.length}</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Share2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Shared Trees</p>
                <p className="text-2xl font-bold text-gray-900">
                  {trees.filter(tree => tree.sharedWith?.length > 0).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Family Trees Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Family Trees</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-paynes-gray text-white hover:bg-paynes-gray/90 flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Tree</span>
          </button>
        </div>

        <CreateTreeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={createTree}
        />

        {trees.length === 0 ? (
          <div className="card p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No family trees yet</h3>
            <p className="text-gray-600 mb-6">
              Create your first family tree to start building your family history.
            </p>
            <button className="btn bg-paynes-gray text-white hover:bg-paynes-gray/90" onClick={() => setIsModalOpen(true)}>
              Create Your First Tree
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trees.map((tree) => (
              <div key={tree.id} className="card p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{tree.name}</h3>
                  {tree.sharedWith?.length > 0 && (
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Share2 className="w-3 h-3 text-green-600" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{tree.members?.length || 0} members</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Created {new Date(tree.createdAt?.seconds * 1000).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Link to={`/tree/${tree.id}`} className="btn bg-paynes-gray text-white hover:bg-paynes-gray/90 flex-1 text-sm py-2 text-center">
                    View Tree
                  </Link>
                  <button className="btn border border-paynes-gray text-paynes-gray hover:bg-paynes-gray/10 text-sm py-2 px-3">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="card p-6">
            <div className="text-center py-8">
              <p className="text-gray-500">No recent activity to show.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}