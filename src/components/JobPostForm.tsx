// components/JobPostForm.tsx
import React, { useState } from 'react';
import { Job } from './types';
import styles from './styles/JobPostForm.module.css'
import { collection, addDoc,  Timestamp  } from 'firebase/firestore';
import { db } from '../../firebaseconfig';

interface JobPostFormProps {
  onSubmit: (job: Job) => void;
  }
  
  const JobPostForm: React.FC<JobPostFormProps> = ({ onSubmit }) => {
    const [job, setJob] = useState<Omit<Job, 'id' | 'createdAt'>>({
      title: '',
      description: '',
      location: '',
      salary: '',
      company: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setJob({
        ...job,
        [name]: value,
      });
    };
  
   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'jobPosts'), {
        ...job,
       
      });
      console.log('Document written with ID: ', docRef.id);

      onSubmit({
        ...job,
        id: docRef.id,
       
      } as Job);
  
        // Reset the form
        setJob({
          title: '',
          description: '',
          location: '',
          salary: '',
          company: '',
        });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };
  
    return (
      <div className='w-full ml-96 rounded-md '>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h2 style={{fontSize:'30px', fontWeight:'bold', textAlign:'center',marginTop:'10px'}}>Post a Job</h2>
        <div className="mb-4 m-3">
          <label htmlFor="title" className="block text-gray-700">Job Title</label>
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            className="w-full  border rounded-md"
          />
        </div>
        <div className="mb-4  m-3">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={job.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div className="mb-4  m-3">
          <label htmlFor="location" className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4  m-3">
          <label htmlFor="salary" className="block text-gray-700">Salary</label>
          <input
            type="text"
            name="salary"
            value={job.salary}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4  m-3">
          <label htmlFor="company" className="block text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-1/2 bg-blue-500 text-white py-2 rounded-md ml-48">Post Job</button>
      </form>
      </div>
    );
  };
  
  export default JobPostForm;