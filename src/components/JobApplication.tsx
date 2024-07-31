import React, { useState } from 'react';
import { db } from '../../firebaseconfig'; // Adjust the path if necessary
import { addDoc, collection } from 'firebase/firestore';
import { Button, TextField, Container, Typography } from '@mui/material';

interface JobApplicationProps {
  jobId: string;
}

const JobApplication: React.FC<JobApplicationProps> = ({ jobId }) => {
  const [resume, setResume] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [lastWorkPlace, setLastWorkPlace] = useState('');

  const handleApply = async () => {
    try {
      await addDoc(collection(db, 'applications'), {
        jobId,
        resume,
        name,
        email,
        phone,
        workExperience,
        lastWorkPlace,
      });

      alert('Applied successfully!');
    } catch (error) {
      console.error('Error applying:', error);
      alert('Error applying.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Job Application</Typography>
      <TextField
        label="Resume"
        fullWidth
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Phone"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Work Experience"
        fullWidth
        value={workExperience}
        onChange={(e) => setWorkExperience(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Last Work Place"
        fullWidth
        value={lastWorkPlace}
        onChange={(e) => setLastWorkPlace(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleApply}
        style={{ marginTop: '16px' }}
      >
        Apply
      </Button>
    </Container>
  );
};

export default JobApplication;
