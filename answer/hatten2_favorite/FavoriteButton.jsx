import { useEffect, useState } from 'react';
import { doc, onSnapshot, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Button from '@mui/material/Button';
import { db, auth } from '../firebase';

export default function FavoriteButton({ id }) {
  const [user, setUser] = useState(null);
  const [favorite, setFavorite] = useState(false);

  // ログインしているかどうかを見張る
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return unsubscribe;
  }, []);

  // ログインしていたら、users/自分の uid/favorites/商品の id を見張る
  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(doc(db, 'users', user.uid, 'favorites', String(id)), (snapshot) => {
      setFavorite(snapshot.exists());
    });
    return unsubscribe;
  }, [user, id]);

  // ログインしていなければ、ボタンを出さない
  if (!user) return null;

  // 押すたびに、お気に入りに入れる・外すを切り替える
  const handleClick = async () => {
    const ref = doc(db, 'users', user.uid, 'favorites', String(id));
    try {
      if (favorite) {
        await deleteDoc(ref);
      } else {
        await setDoc(ref, { createdAt: serverTimestamp() });
      }
    } catch (error) {
      alert('できませんでした（' + error.code + '）');
    }
  };

  return (
    <Button variant={favorite ? 'contained' : 'outlined'} color="warning" onClick={handleClick}>
      {favorite ? '★ お気に入り' : '☆ お気に入り'}
    </Button>
  );
}
