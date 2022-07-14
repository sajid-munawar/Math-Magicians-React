import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Qoute from './components/Qoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="./components/Home" element={<Home />}>
              <Home />
            </Route>
            <Route path="./components/Calculator" element={<Calculator />}>
              <Calculator />
            </Route>
            <Route path="./components/Qoute" element={<Qoute />}>
              <Qoute />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
