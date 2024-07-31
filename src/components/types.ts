// types.ts
export interface Job {
  createdAt: string;
    id: string;
    title: string;
    description: string;
    location: string;
    salary: string;
    company: string;
    userId?: string; 
  }
  