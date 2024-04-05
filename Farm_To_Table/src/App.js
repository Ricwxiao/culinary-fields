// import './App.css';
import Home from './components/Home.js';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            Hello World
          </h1>

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
          <Routes>
            <Route path="home" element={<HomePage />} />
          </Routes>
      </Router>
    </div>
  );
}


export default App;
