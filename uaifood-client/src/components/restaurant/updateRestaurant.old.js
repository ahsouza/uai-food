import React, { Component } from "react";
import axios from 'axios';

export default class EditExpense extends Component {

  constructor(props) {
    super(props)

    this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this);
    this.onChangeRestaurantOrigins = this.onChangeRestaurantOrigins.bind(this);
    this.onChangeRestaurantTelephone = this.onChangeRestaurantTelephone.bind(this);
    this.onChangeRestaurantEmail = this.onChangeRestaurantEmail.bind(this);
    this.onChangeRestaurantImage = this.onChangeRestaurantImage.bind(this);
    this.onChangeRestaurantDescription = this.onChangeRestaurantDescription.bind(this);
    this.onChangeRestaurantSlogan = this.onChangeRestaurantSlogan.bind(this);
    this.onChangeRestaurantLocationCity = this.onChangeRestaurantLocationCity.bind(this);
    this.onChangeRestaurantLocationCep = this.onChangeRestaurantLocationCep.bind(this);
    this.onChangeRestaurantLocationState = this.onChangeRestaurantLocationState.bind(this);
    this.onChangeRestaurantLocationLat = this.onChangeRestaurantLocationLog.bind(this);
    this.onChangeRestaurantLocationLog = this.onChangeRestaurantLocationLat.bind(this);
    this.onChangeRestaurantItens = this.onChangeRestaurantItens.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      origins: [''],
      telephone: '',
      email: '',
      image: '',
      description: '',
      slogan: '',
      location: { city: '', cep: '', state: '', lat: 0, log: 0},
      itens: ['']
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/v1/restaurants/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          amount: res.data.amount,
          description: res.data.description
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeExpenseName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeExpenseAmount(e) {
    this.setState({ amount: e.target.value })
  }

  onChangeExpenseDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const restaurantUpdate = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description
    };

    axios.put('http://localhost:8000/api/v1/restaurant/' + this.props.match.params.id, restaurantUpdate)
      .then((res) => {
        console.log(res.data)
        console.log('Restaurant successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Expense List 
    this.props.history.push('/restaurants')
  }


  render() {
    return (<div className="form-wrapper">

    </div>);
  }
}