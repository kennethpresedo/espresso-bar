import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav>
      <div className={styles.links}>
      <Link className="link" to="/orders/new">Place New Order</Link>
      <Link className="link" to="/orders">View Order History</Link>
      </div>
      <div className={styles.espressoBar}>Espresso<br />Bar</div>
    </nav>
  );
}