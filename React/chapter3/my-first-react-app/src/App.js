import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [showEvents,setShowEvents] = useState(true)
  const [events,setEvents] = useState([
    {title:"marios birthday bash", id:1},
    {title:"marios birthday bash2", id:2},
    {title:"marios birthday bash3", id:3},
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id!== event.id
      })
    })
    console.log(id)
  }

  return (
    <div className="App">
      <div>
        <button onClick={() =>{setShowEvents(false)}}>Hide Events</button>
        <button onClick={() => {setShowEvents(true)}}>Show Events</button>
      </div>
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} -- {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  )
}

export default App;