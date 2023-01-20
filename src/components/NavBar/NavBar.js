import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NavBar() {
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;

    </nav>
  );
}