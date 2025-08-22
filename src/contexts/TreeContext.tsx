import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, query, where, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';
import { FamilyTree } from '../types';

interface TreeContextType {
  trees: FamilyTree[];
  selectedTree: FamilyTree | null;
  createTree: (data: { name: string; description?: string }) => Promise<void>;
  getTreeById: (id: string) => Promise<void>;
}

const TreeContext = createContext<TreeContextType | undefined>(undefined);

export function useTree() {
  const context = useContext(TreeContext);
  if (context === undefined) {
    throw new Error('useTree must be used within a TreeProvider');
  }
  return context;
}

export function TreeProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [trees, setTrees] = useState<FamilyTree[]>([]);
  const [selectedTree, setSelectedTree] = useState<FamilyTree | null>(null);

  useEffect(() => {
    if (!user) {
      setTrees([]);
      return;
    }

    const q = query(collection(db, 'trees'), where('ownerId', '==', user.id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const userTrees: FamilyTree[] = [];
      querySnapshot.forEach((doc) => {
        userTrees.push({ id: doc.id, ...doc.data() } as FamilyTree);
      });
      setTrees(userTrees);
    });

    return () => unsubscribe();
  }, [user]);

  const createTree = async (data: { name: string; description?: string }) => {
    if (!user) {
      toast.error('You must be logged in to create a tree.');
      return;
    }

    try {
      await addDoc(collection(db, 'trees'), {
        name: data.name,
        description: data.description || '',
        ownerId: user.id,
        ownerEmail: user.email,
        members: [],
        sharedWith: [],
        isBlocked: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      toast.success('Family tree created successfully!');
    } catch (error) {
      console.error('Error creating tree:', error);
      toast.error('Failed to create family tree.');
      throw error;
    }
  };

  const getTreeById = async (id: string) => {
    try {
      const treeDoc = await getDoc(doc(db, 'trees', id));
      if (treeDoc.exists()) {
        setSelectedTree({ id: treeDoc.id, ...treeDoc.data() } as FamilyTree);
      } else {
        toast.error('Family tree not found.');
      }
    } catch (error) {
      console.error('Error getting tree:', error);
      toast.error('Failed to fetch family tree.');
    }
  };

  const value: TreeContextType = {
    trees,
    selectedTree,
    createTree,
    getTreeById,
  };

  return <TreeContext.Provider value={value}>{children}</TreeContext.Provider>;
}
