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


  render() {
    return (<h1>LIST RESTAURANT</h1>);
  }
}