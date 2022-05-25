import React from "react";
import "./Reservations.css";
import Card from "./Card"

const Reservations = (props) => {
  const allReservations = props.res.map(single => {
      return(
        <Card key={single.id} {...single} deleteReservation={props.deleteReservation}/>
      )
    });

  return (
    <div className="container">
    {allReservations}
    </div>
  )
}

export default Reservations;
