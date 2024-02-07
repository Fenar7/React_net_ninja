import logo from './logo.svg';
import {useState} from 'react';
import Title from './components/title';
import React from 'react';
import Modal from './components/modal'
import EventList from './components/eventlist'
import './App.css';

function App() {
  const [isSalesModal ,setSalesModal] = useState()
  const [showModal,setModal] = useState(false)
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

  console.log(showModal)

  const handleClose = () =>{
    setModal(false)
  }

  const handleOpen = () => {
    setModal(true)
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
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && <Modal handleClose={handleClose} isSalesModal={false}>
        <h2>10% Off Coupoun Code</h2>
        <p>Use the code Ninja10 at the checkout.</p>
      </Modal>}

      <button onClick={handleOpen} className={isSalesModal ? "salesbtn" : "sale-bad"}>Show Modal</button>
    </div>
  )
}

export default App;