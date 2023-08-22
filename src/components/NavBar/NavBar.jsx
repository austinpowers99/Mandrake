import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home Page</Link>
      &nbsp; | &nbsp;
      <Link to="/plants">My Plants</Link>
      &nbsp; | &nbsp;
      <Link to="/plants/new">Add New</Link>
      &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}