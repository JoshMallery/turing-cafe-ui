import React , {Component} from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date:"",
      time:"",
      number:""
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReservation(this.state)
    this.setState( {
      name: "",
      date:"",
      time:"",
      number:""
    })
  }

  render(){
    return(
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={event => this.handleChange(event)}
        />

         <input
           type="date"
           name="date"
           value={this.state.date}
           placeholder="Date(mm/dd)"
           onChange={event => this.handleChange(event)}
         />

          <input
            type="time"
            name="time"
            placeholder="time"
            value={this.state.time}
            onChange={event => this.handleChange(event)}
          />

           <input
             type="number"
             name="number"
             placeholder="Number Of Guests"
             min="1"
             value={this.state.number}
             onChange={event => this.handleChange(event)}
           />

          <button onClick={event => this.handleSubmit(event)}>Make Reservation</button>
      </form>
    )
  }


}

export default Form;
