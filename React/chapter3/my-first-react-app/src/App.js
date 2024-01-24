import logo from './logo.svg';
import {useState} from 'react';
import Title from './components/title';
import React from 'react ';
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

  const subtitle = "All the lates events in mario land"

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle}/>   
      <Title title="Another title" subtitle="another subtitle"/>   
      <div>
       {showEvents && 
        <button onClick={() =>{setShowEvents(false)}}>Hide Events</button>
       }
        {
          !showEvents &&
          <button onClick={() => {setShowEvents(true)}}>Show Events</button>
        }
      </div>
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} -- {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </React.Fragment>
      ))}
    </div>
  )
}

export default App;