import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface Job {
  title: string;
  description: string;
}

interface JobPostingProps {
  job: Job;
}

const JobPosting: React.FC<JobPostingProps> = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="body2">{job.description}</Typography>
        <Button variant="contained" color="primary">Apply</Button>
      </CardContent>
    </Card>
  );
};

export default JobPosting;
