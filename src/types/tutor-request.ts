export interface TutorRequestData {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  studentName?: string;
  studentGender?: string;
  studentSchool?: string;
  studentGrade?: string;
  subjects?: string[];
  curriculum: string;
  preferredFrequency?: string;
  preferredDuration?: string;
  preferredTutorType?: string;
  address?: string;
  additionalNotes?: string;
} 