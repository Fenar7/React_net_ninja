import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('mario')
  const [events,setEvents] = useState([
    {title:"marios birthday bash", id:1},
    {title:"marios birthday bash2", id:2},
    {title:"marios birthday bash3", id:3},
  ])

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
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} -- {event.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default App;