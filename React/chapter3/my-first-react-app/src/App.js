import './App.css'
import {useState} from 'react'

function App() {
  const [name,setName] = useState('mario')

  const handleClick = () =>{
    setName('luigi')
    console.log('name changed'+name)
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;