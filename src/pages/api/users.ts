// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const usersCollection = await getDocs(collection(db, 'users'));
    const users = usersCollection.docs.map(doc => doc.data());
    res.status(200).json(users);
  }catch (error: any) { // Ensure error is of type 'any' to handle different error formats
    console.error('Error handling auth request:', error);
    res.status(400).json({ error: error.message || 'An unknown error occurred' });
  }
};

export default handler;
