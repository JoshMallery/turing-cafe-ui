import React , {Component} from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date:"",
      time:"",
      number:null
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log({id:Date.now(),...this.state})
    this.props.addReservation(this.state)

  }

  render(){
    return(
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={event => this.handleChange(event)}
        />

         <input
           type="date"
           name="date"
           placeholder="Date(mm/dd)"
           onChange={event => this.handleChange(event)}
         />

          <input
            type="time"
            name="time"
            placeholder="time"
            onChange={event => this.handleChange(event)}
          />

           <input
             type="number"
             name="number"
             placeholder="Number Of Guests"
             onChange={event => this.handleChange(event)}
           />

          <button onClick={event => this.handleSubmit(event)}>Make Reservation</button>
      </form>
    )
  }


}

export default Form;
