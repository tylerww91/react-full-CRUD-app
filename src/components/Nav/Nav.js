import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';

export default function Nav() {
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOut();
    history.push('/auth/sign-in');
    setUser(null);
  };

  return (
    <header>
      {user && (
        <>
          <div>Hello {user.email}</div>
          <button onClick={handleSignOut}>Sign Out</button>
          <Link to="/posts/new">New Post</Link>
        </>
      )}
    </header>
  );
}
