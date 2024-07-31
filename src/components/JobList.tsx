// components/JobList.tsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import { Job } from './types';
import styles from './styles/JobPostForm.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobCollection = collection(db, 'jobPosts');
      const jobSnapshot = await getDocs(jobCollection);
      const jobList = jobSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
          createdAt: data.createdAt ? (data.createdAt as Timestamp).toDate().toLocaleString() : 'N/A',
        };
      }) as Job[];
      jobList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setJobs(jobList);
    };

    fetchJobs();
  }, []);


  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'jobPosts', id));
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleUpdate = async (id: string, updatedJob: Partial<Job>) => {
    const jobDoc = doc(db, 'jobPosts', id);
    await updateDoc(jobDoc, updatedJob);
    setJobs(jobs.map(job => (job.id === id ? { ...job, ...updatedJob } : job)));
  };

  return (
    <div className={styles.jobListContainer}>
      {jobs.map(job => (
        <div key={job.id} className={styles.jobCard}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Company:</strong> {job.company}</p>
          <p><small>Posted on: {job.createdAt}</small></p>
          <div className={styles.actions}>
            <button onClick={() => handleUpdate(job.id, { title: 'Updated Title' })}><FaEdit /></button>
            <button onClick={() => handleDelete(job.id)}><FaTrash /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
