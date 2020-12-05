import React, { Component } from "react";
import API from "../api/API";
import Table from 'react-bootstrap/Table';

class Usertable extends Component {
    state = {
      search: "",
      results: [{}]
    };

    componentDidMount() {
        this.search();
      }
    
      search = () => {
        API.search()
          .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
      };
    

    render() {
        return (
          <div>
              <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
          </div>
        );
    }
    
};

export default Usertable;