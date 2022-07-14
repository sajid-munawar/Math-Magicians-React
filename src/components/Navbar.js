import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/Calculator"
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
          }}
        >
          Calculator
        </Link>
        <Link to="./Qoute">Qoute</Link>
      </div>
    </nav>
  );
}

export default Navbar;
