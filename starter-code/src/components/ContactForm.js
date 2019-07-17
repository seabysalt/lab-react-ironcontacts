import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    popularity: 0,
    pictureUrl: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(event.target);
    // this.props.pushContact()
    const newContact = {
      name: this.state.name,
      pictureUrl: this.state.pictureUrl,
      popularity: Number(this.state.popularity)
    };
    
    this.props.pushContact(newContact);

    this.setState({
      name: "",
      popularity: 0,
      pictureUrl: ""
    })
  };

  handleChange = event => {
    console.log(event.target.name, event.target.value)
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
        [key]: value
    })

    // same as:
      // if (event.target.name === "name") {
      //   this.setState({ name: event.target.value });
      // } else if (event.target.name === "popularity") {
      //   this.setState({ popularity: event.target.value });
      // }  else if (event.target.name === "pictureUrl") {
      //   this.setState({ pictureUrl: event.target.value });
      // }
    };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          id="name"
          value={this.state.name}
        />

        <label htmlFor="popularity">Popularity: </label>
        <input
          onChange={this.handleChange}
          type="number"
          name="popularity"
          id="popularity"
          value={this.state.popularity}
        />

        <label htmlFor="pictureUrl">Picture URL: </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="pictureUrl"
          id="pictureUrl"
          value={this.state.pictureUrl}
        />

        <button type="submit">Add a celebrity</button>
      </form>
    );
  }
}