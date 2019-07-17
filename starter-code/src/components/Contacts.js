import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    console.log(this.props)
    const contact = this.props.data;
    return (
        <tr key={contact.id}>
            <td>
              <img className="img" src={contact.pictureUrl} alt=""/>
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>
              <button onClick={this.props.handleDelete}>Delete</button>
            </td>
        </tr>
    )
  }
};