import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('mario')

  const handleClick = () => {
    setName('luigi')
    if(name=='luigi'){
      setName('mario')
    }
    console.log(name)
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>

     <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>

     <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;