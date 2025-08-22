import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useTree } from '../contexts/TreeContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const addMemberSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

type AddMemberFormData = z.infer<typeof addMemberSchema>;

export default function TreeViewPage() {
  const { treeId } = useParams<{ treeId: string }>();
  const { selectedTree, getTreeById } = useTree();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddMemberFormData>({
    resolver: zodResolver(addMemberSchema),
  });

  const handleAddMember = async (data: AddMemberFormData) => {
    // This will be implemented in the next step
    console.log('Adding member with data:', data);
    reset();
  };

  useEffect(() => {
    if (treeId) {
      getTreeById(treeId);
    }
  }, [treeId, getTreeById]);

  if (!selectedTree) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="card p-8 text-center">
            <LoadingSpinner />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="card p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {selectedTree.name}
          </h1>
          <p className="text-gray-600 mb-6">
            {selectedTree.description}
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Family Members</h2>
          {selectedTree.members && selectedTree.members.length > 0 ? (
            <ul>
              {selectedTree.members.map((member) => (
                <li key={member.id} className="border-b py-2 flex justify-between items-center">
                  <span>{member.name}</span>
                  <div>
                    <button className="text-sm text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                    <button className="text-sm text-red-600 hover:text-red-800">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No members in this tree yet.</p>
          )}

          <form onSubmit={handleSubmit(handleAddMember)} className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Add New Member</h3>
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <input
                  {...register('name')}
                  type="text"
                  className="input"
                  placeholder="Enter member's name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              <button type="submit" className="btn bg-paynes-gray text-white hover:bg-paynes-gray/90">
                Add Member
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}