// pages/index.tsx
import React from 'react';
import Link from "next/link"
// import '../styles/globals.css'
import { Container, Typography, Button } from '@mui/material';
const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Job Portal
      </Typography>
      <Link href="/signin" passHref>
        <Button variant="contained" color="primary" component="a">
          Sign In
        </Button>
      </Link>
      <Link href="/signup" passHref>
        <Button variant="contained" color="secondary" component="a">
          Sign Up
        </Button>
      </Link>
      {/* <Link href="/jobs" passHref>
        <Button variant="contained" color="success" component="a">
          View Jobs
        </Button>
      </Link> */}
    </Container>
  );
};

export default Home;
