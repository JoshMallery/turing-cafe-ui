import React from "react";
import "./Card.css";

const Card = ({date,id,name,number,time,deleteReservation}) => {

  return(
      <div className="card">
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time}</p>
        <p>Number of guests: {number}</p>
        <button onClick={() => deleteReservation(id)}>Cancel</button>
      </div>
  )
}

export default Card;
