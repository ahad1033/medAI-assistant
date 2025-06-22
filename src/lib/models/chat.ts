import { ObjectId } from 'mongodb';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  _id?: ObjectId;
  userId: string;
  serviceId: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password?: string;
  image?: string;
  googleId?: string;
  facebookId?: string;
  createdAt: Date;
  emailVerified?: Date | null;
}