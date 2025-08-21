import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function TreeViewPage() {
  const { treeId } = useParams<{ treeId: string }>();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="card p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Family Tree View
          </h1>
          <p className="text-gray-600 mb-6">
            Tree ID: {treeId}
          </p>
          <p className="text-gray-500">
            Interactive family tree visualization will be implemented here.
          </p>
        </div>
      </main>
    </div>
  );
}