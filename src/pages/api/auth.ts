import type { NextApiRequest, NextApiResponse } from 'next';
import { auth, db } from '../../../firebaseconfig'; // Adjust path if necessary
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password, type, name, phone } = req.body;

  if (!email || !password || !type || (type === 'signup' && (!name || !phone))) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    if (type === 'signin') {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      res.status(200).json({ uid: userCredential.user.uid });
    } else if (type === 'signup') {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user information in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        phone,
        role: 'user', // Default role is 'user'
      });

      res.status(200).json({ uid: user.uid });
    } else {
      res.status(400).json({ error: 'Invalid type' });
    }
  } catch (error: any) { // Ensure error is of type 'any' to handle different error formats
    console.error('Error handling auth request:', error);
    res.status(400).json({ error: error.message || 'An unknown error occurred' });
  }
};

export default handler;
