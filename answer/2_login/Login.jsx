import { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { auth } from '../firebase';

export default function Login() {
  const [user, setUser] = useState(null);

  // ログインしているかどうかを見張る
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return unsubscribe;
  }, []);

  // Google のログイン画面を、別の小さな画面（ポップアップ）で開く
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      alert('ログインできませんでした（' + error.code + '）');
    }
  };

  if (user) {
    return (
      <Typography sx={{ mb: 3 }}>
        {user.displayName} さんでログイン中
        <Button onClick={() => signOut(auth)}>ログアウト</Button>
      </Typography>
    );
  }

  return (
    <Button variant="contained" onClick={handleLogin} sx={{ mb: 3 }}>
      Google でログイン
    </Button>
  );
}
