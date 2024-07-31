// components/SignIn.tsx
import React, { useState } from 'react';
import { auth } from '../../firebaseconfig';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField, Container, Typography, Link, DialogActions, Dialog, DialogContent, DialogTitle, InputAdornment, IconButton } from '@mui/material';
import { useRouter } from 'next/router'; 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false); 
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); 
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully!');
      router.push('/dashboard')
    } catch (error) {
      console.error(error);
      alert('Error signing in.');
    }
  };
  const handlePasswordReset = async () => {
    setError(null);
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess('Password reset email sent. Check your inbox!');
      setOpenDialog(false);
    } catch (error) {
      console.error(error);
      setError('Error sending password reset email. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" className='mt-60 text-center '>
      <Typography variant="h4" gutterBottom>Sign In</Typography>
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='mb-5'
      />
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(prev => !prev)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSignIn}>Sign In</Button>
      <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
        Don't have an account?{' '}
        <Link href="/signup" color="secondary">
          Sign Up
        </Link>
      </Typography>

      <Typography variant="body2" align="center" style={{ marginTop: '16px', cursor: 'pointer' }} onClick={() => setOpenDialog(true)}>
        Forgot Password?
      </Typography>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <TextField
            label="Enter your email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePasswordReset} color="primary">
            Reset Password
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SignIn;

function setError(arg0: null) {
  throw new Error('Function not implemented.');
}
