import React, { Component } from "react";
import API from "../api/API";
import Table from 'react-bootstrap/Table';
import Tablerow from "../components/Tablerow"

class Usertable extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    console.log("componentDidMount")
    this.search();
  }

  search = () => {
    API.search()
      .then(res => {
        console.log(res.data.results)
        this.setState({ results: res.data.results })})
      .catch(err => console.log(err));
  };s


  render() {
    return (
      <div className = "container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map(user => (
              <Tablerow
              key = {user.login.uuid}
              avatar = {user.picture.thumbnail}
              firstname = {user.name.first}
              lastname = {user.name.last}
              email = {user.email}
              phone = {user.phone}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }

};

export default Usertable;