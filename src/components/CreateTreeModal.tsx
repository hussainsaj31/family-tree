import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const createTreeSchema = z.object({
  name: z.string().min(2, 'Tree name must be at least 2 characters'),
  description: z.string().optional(),
});

type CreateTreeFormData = z.infer<typeof createTreeSchema>;

interface CreateTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTreeFormData) => Promise<void>;
}

export default function CreateTreeModal({ isOpen, onClose, onSubmit }: CreateTreeModalProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateTreeFormData>({
    resolver: zodResolver(createTreeSchema),
  });

  const handleFormSubmit = async (data: CreateTreeFormData) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
      reset();
      onClose();
    } catch (error) {
      // Error is handled by the onSubmit function
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create a New Family Tree</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Tree Name
            </label>
            <input
              {...register('name')}
              type="text"
              className="input"
              placeholder="e.g., The Smith Family"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              {...register('description')}
              rows={3}
              className="input"
              placeholder="A brief description of this family tree"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="btn border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="btn bg-paynes-gray text-white hover:bg-paynes-gray/90"
            >
              {isLoading ? <LoadingSpinner size="sm" /> : 'Create Tree'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
