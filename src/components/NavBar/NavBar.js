import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav>
      <Link className="link" to="/orders/new">New Order</Link>
      &nbsp;&nbsp;<span className='span'>|</span>&nbsp;&nbsp;
      <Link className="link" to="/orders">Order History</Link>




    </nav>
  );
}