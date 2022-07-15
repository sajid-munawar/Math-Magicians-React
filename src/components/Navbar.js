import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        {' '}
        {' '}
        |
        {' '}
        <Link to="/Calculator">Calculator</Link>
        {' '}
        |
        {' '}
        <Link to="/Qoute">Qoute</Link>
      </nav>
    </div>
  );
}

export default Navbar;
