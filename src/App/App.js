import React, { Component } from 'react';
import './App.css';
import Reservations from "../Components/Reservations";
import Form from "../Components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations:[]
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(response => this.setState({reservations:response}))
  }

  addReservation = (reservationData) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationData)
    })
    .then(response => response.json())
    .then(response => this.setState({reservations:[...this.state.reservations,response]}))
    .catch(error => console.log(error))
  }

deleteReservation = (reservationId) => {
  fetch(`http://localhost:3001/api/v1/reservations/${reservationId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(response => this.setState({reservations:response}))
  .catch(error => console.log(error))
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
           <Reservations res={this.state.reservations} deleteReservation={this.deleteReservation} />
        </div>
      </div>
    )
  }
}

export default App;
