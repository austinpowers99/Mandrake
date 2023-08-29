import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className='nav-flex'>
        &nbsp; &nbsp;
        <Link to="/">Home</Link>
        &nbsp; &nbsp;
        <Link to="/categories">Categories</Link>
        &nbsp; &nbsp;
        {user ? (
          <>
            <Link to="/plants">My Plants</Link>
            &nbsp; &nbsp;
            <Link to="/plants/new">Add New</Link>
            &nbsp; &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
          </>
        ) : (
          <>
            <Link to="/auth">Log In</Link>
          </>
        )}
      </div>
    </nav>
  );
}