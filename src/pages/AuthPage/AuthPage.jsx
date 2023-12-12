import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  // State to manage toggling between sign-up and log-in forms
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    navigate('/');
  };

  return (
    <main className='auth-page'>
      { showSignUp ?
      <div>
        <h1>Welcome!</h1>
        <br /><br />
        <SignUpForm onSuccess={handleAuthSuccess} />
      </div>
        :
      <div>
        <h1>Welcome back!</h1>
        <br /><br />
        <LoginForm onSuccess={handleAuthSuccess} setUser={setUser} />
      </div>
      }
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
    </main>
  );
}