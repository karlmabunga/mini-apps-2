import React from 'react';

const Events = ({ data }) => {
  const historyEvents = data.map((event) => {
    return (
      <div>
        {event.description}<br/>
        {event.category2}<br/>
        {event.date}<br/>
        <br/>
        <br/>
      </div>
    )
  })

  return(
    <div>
      {historyEvents}
    </div>
  )
};

export default Events;