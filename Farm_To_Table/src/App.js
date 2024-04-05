// import './App.css';
import FarmerInfo from "./components/FarmerInfo/FarmerInfo";

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
      <p><strong>TEST!</strong> The following is Farmer Info</p>
      <FarmerInfo farmName="Tian Tian Farm" />
    </div>
  );
}

export default App;
