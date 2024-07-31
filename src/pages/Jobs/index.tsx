// // pages/jobs.tsx
// import React, { useEffect, useState } from 'react';
// import { db } from '';
// import { collection, getDocs } from 'firebase/firestore';
// import JobPosting from '@/components/JobPosting';
// import { Container, Typography } from '@mui/material';

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const jobsCollection = await getDocs(collection(db, 'jobs'));
//       setJobs(jobsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4">Job Postings</Typography>
//       {jobs.map(job => (
//         <JobPosting key={job.id} job={job} />
//       ))}
//     </Container>
//   );
// };

// export default Jobs;
