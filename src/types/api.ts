import { TutorRequestData } from './tutor-request';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface TutorRequestResponse extends TutorRequestData {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
} 