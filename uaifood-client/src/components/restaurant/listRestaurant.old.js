import React, { Component } from "react";
import axios from 'axios';


export default class RestaurantsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/v1/restaurants/')
      .then(res => {
        this.setState({
          restaurants: res.data
        });
      })
      .catch((e) => {
        console.log(e);
      })
  }

  DataTable() {
    return this.state.restaurants.map((res, i) => {
      return <ExpenseTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}