export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  isAdmin?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface FamilyMember {
  id: string;
  name: string;
  email?: string;
  birthYear?: number;
  isDeceased: boolean;
  parentIds: string[];
  spouseIds: string[];
  childrenIds: string[];
  photoURL?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FamilyTree {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  ownerEmail: string;
  members: FamilyMember[];
  sharedWith: TreeAccess[];
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TreeAccess {
  userId: string;
  email: string;
  role: 'viewer' | 'editor';
  invitedAt: Date;
  acceptedAt?: Date;
}

export interface TreeInvitation {
  id: string;
  treeId: string;
  treeName: string;
  inviterEmail: string;
  inviteeEmail: string;
  role: 'viewer' | 'editor';
  token: string;
  expiresAt: Date;
  createdAt: Date;
  isAccepted: boolean;
}

export type UserRole = 'owner' | 'viewer' | 'editor' | 'admin';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}