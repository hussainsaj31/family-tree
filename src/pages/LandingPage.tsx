import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Share2, Shield, TreePine } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TreePine className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Family Tree Manager</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="btn-primary px-4 py-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Your
            <span className="text-primary-600 block">Family Tree</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create, manage, and share your family history with ease. Connect with relatives, 
            preserve memories, and discover your heritage in a beautiful, interactive way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="btn-primary px-8 py-3 text-lg"
            >
              Start Building Your Tree
            </Link>
            <Link
              to="/login"
              className="btn-outline px-8 py-3 text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Preserve Your Family History
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides all the tools you need to create, manage, and share your family tree.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Family Management</h3>
              <p className="text-gray-600">
                Add family members, relationships, and important details with our intuitive interface.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share & Collaborate</h3>
              <p className="text-gray-600">
                Invite family members to view and contribute to your family tree with secure sharing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy & Security</h3>
              <p className="text-gray-600">
                Your family data is protected with enterprise-grade security and privacy controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Family Tree?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families who are preserving their heritage and connecting with their roots.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-primary-600 bg-white rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <TreePine className="w-6 h-6" />
              <span className="text-lg font-semibold">Family Tree Manager</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Family Tree Manager. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}