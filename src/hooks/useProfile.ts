import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { handleFirestoreError, OperationType } from '@/lib/firestore-errors';

import { useParams } from 'react-router-dom';

export function useProfile() {
  const [user] = useAuthState(auth);
  const { username } = useParams(); // This actually receives the UID from the Link in Navbar
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const targetUid = username || user?.uid;

      if (!targetUid) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const docRef = doc(db, 'users', targetUid);
      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else if (user && targetUid === user.uid) {
          // Create initial profile for current user if it doesn't exist
          const initialProfile = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            username: user.email?.split('@')[0] || `user_${user.uid.slice(0, 5)}`,
            bio: "",
            role: 'user',
            skills: [],
            interests: [],
            xp: 0,
            level: 1,
            streak: 0,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          };
          await setDoc(docRef, initialProfile);
          setProfile({ ...initialProfile, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
        } else {
          setProfile(null);
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `users/${targetUid}`);
      }
      setLoading(false);
    }

    loadProfile();
  }, [user, username]);

  return { profile, loading };
}
