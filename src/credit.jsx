import React, { Component } from 'react';
class Credit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      number: "",
      date: "MM/YY"

    }
  }
  nameChange = (event) => {
    const regex=/[A-Za-z]/g
    if(event.target.value.match(regex)) {
      this.setState({
        name : event.target.value
      })
    }
  }
  numberChange = (num) => {
    const regex = /[0-9]/g
    if  (num.target.value.match(regex)){
    
      this.setState({
        number: num.target.value
      })
      
    }
  }
  dateChange = (dat) => {

    if (dat.target.value.substring(0, 2) <= 12) {
      this.setState({
        date: dat.target.value.substring(0, 2) + "/" + dat.target.value.substring(2, 4)
      })
    } else if (dat.target.value.substring(0, 2) > 12) {
      console.log("date", this.state.date)
      this.setState({
        date: "0" + dat.target.value.substring(0, 1) + "/" + dat.target.value.substring(1, 3)
      })


    };

  }
  render() {
    return (
      <div className="total">
        <div className="Creditt">
          <span className="name">{this.state.name.padEnd(22, "x")} </span>
          <span className="number">{this.state.number.padEnd(16,"*")} </span>
          <span className="validity">{this.state.date.padEnd(2, "MM")} </span>
        </div>
        <div className="holders">
          <input className="nc" placeholder="name" onChange={this.nameChange} maxLength="22"></input>
          <input className="nuc" placeholder="number" onChange={this.numberChange} maxLength="16"></input>
          <input className="dc" placeholder="month/year" onChange={this.dateChange} maxLength="4"></input>
        </div>
      </div>
    );
  }
}
export default Credit;


