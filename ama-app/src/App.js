// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Rolodex from './components/Rolodex'
// import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Welcome name='Amazonia' /> 

        <Rolodex />

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React now
        </a> */}

        {/* <Button /> */}

      </header>
    </div>
  );
}

export default App;
