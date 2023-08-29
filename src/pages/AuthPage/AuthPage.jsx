import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main className='auth-page'>
      { showSignUp ?
      <div>
        <h1>Welcome!</h1>
        <br /><br />
        <SignUpForm setUser={setUser} />
      </div>
        :
      <div>
        <h1>Welcome back!</h1>
        <br /><br />
        <LoginForm setUser={setUser} />
      </div>
      }
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
    </main>
  );
}