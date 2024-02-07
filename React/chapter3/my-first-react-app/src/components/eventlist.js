import React from 'react'
import styles from './eventlist.module.css'

export default function eventlist({events , handleClick}) {
  return (
    <div>
      {
        events.map((event, index) => (
            <div className={styles.card} key={event.id}>
              <h2>{index} -- {event.title}</h2>
              <button onClick={() => handleClick(event.id)}>Delete Event</button>
            </div>
          ))
      }
    </div>
  )
}
