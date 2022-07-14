import './App.css';
import { Link } from 'react-router-dom';
// import Home from './components/Home';
// import Calculator from './components/Calculator';

function App() {
  return (
    <div>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/Calculator">Calculator</Link>
        {' '}
        |
        {' '}
        <Link to="/Qoute">Qoute</Link>
      </nav>
    </div>
  );
}

export default App;
