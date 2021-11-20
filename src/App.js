//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  //const n1 = prompt('type ur name')
  const name = 'Cyatile'

  return (
    <div className="App"> 
      <h1 style={{color: 'red', backgroundColor: 'black'}}>Hello from react</h1>
      <h2>heheh... {name} </h2>
      <Header title='leti' />

{/*    <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
  */}
    </div>
  );
}

export default App;
