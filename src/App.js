// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Rolodex from './components/Rolodex'
// import Button from './Button';

function App() {
  return (
    <div className="App">

      <header className="App-header py-16">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Welcome name='Amazonia' /> 

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

      <Rolodex className="py-16" />

    </div>
  );
}

export default App;
