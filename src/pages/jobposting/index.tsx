// pages/job-posting.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import JobPostForm from '@/components/JobPostForm';
// import JobList from '@/components/JobList';
import withRole from '@/pages/hoc/withRole';
import { addDoc, getDocs } from 'firebase/firestore';
import { SmartButton } from '@mui/icons-material';
import { db, collection,  } from '../../../firebaseconfig';
import { Job } from '../../components/types';

const JobPostingPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const router = useRouter();

  const fetchJobs = async () => {
    try {
      const jobsCollection = collection(db, 'jobPosts');
      const jobsSnapshot = await getDocs(jobsCollection);
      const jobsData = jobsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Job[];
      setJobs(jobsData);
    } catch (error) {
      console.error('Error fetching jobs: ', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };
  const handlePostPage = () => {
    router.push('/viewpost');
  };
  const handlePostJob = (newJob: Omit<Job, 'id'>) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      { ...newJob, id: 'temp-id' }, // 'temp-id' should be replaced with actual id from Firestore
    ]);
  };
  return (
    <div className="min-h-screen flex flex-col" >
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Portal</h1>
        
        <div className="flex gap-4" onClick={handlePostPage} >
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            View post
          </button>
          <button 
            onClick={handleBackToDashboard} 
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Back to Dashboard
          </button>
        </div>
      </header>
      <div className="container p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <JobPostForm  onSubmit={handlePostJob} />
          {/* <JobList jobs={[]}/> */}
        </div>
      </div>
    </div>
  );
};

export default withRole(JobPostingPage, ['hr']);
