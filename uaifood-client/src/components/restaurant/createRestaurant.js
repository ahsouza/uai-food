import React, { Component } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { 
  DatePicker,
  Layout,
  Input,
  Select,
  Row,
  Col,
  Card,
  Image,
  Carousel,
  Avatar,
  Badge,
  Space,
  Radio,
  Steps, 
  Button,
  message
} from 'antd';
import 'antd/dist/antd.css';
import { 
  AudioOutlined,
  EditOutlined,
  EllipsisOutlined, 
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Step } = Steps;

const steps = [
  {
    title: 'Informação',
    content: 'Informe os dados do seu negócio',
  },
  {
    title: 'Comunicação',
    content: 'Forneça suas redes sociais, site ou qualquer meio',
  },
  {
    title: 'Cardápio',
    content: 'Adicionar ítens ao cardápio',
  },
];

export default class CreateRestaurant extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this);
    this.onChangeRestaurantOrigins = this.onChangeRestaurantOrigins.bind(this);
    this.onChangeRestaurantTelephone = this.onChangeRestaurantTelephone.bind(this);
    this.onChangeRestaurantEmail = this.onChangeRestaurantEmail.bind(this);
    this.onChangeRestaurantLogo = this.onChangeRestaurantLogo.bind(this);
    this.onChangeRestaurantSmookingAllowed = this.onChangeRestaurantSmookingAllowed.bind(this);
    this.onChangeRestaurantDescription = this.onChangeRestaurantDescription.bind(this);
    this.onChangeRestaurantSlogan = this.onChangeRestaurantSlogan.bind(this);
    this.onChangeRestaurantLocationCity = this.onChangeRestaurantLocationCity.bind(this);
    this.onChangeRestaurantLocationCep = this.onChangeRestaurantLocationCep.bind(this);
    this.onChangeRestaurantLocationState = this.onChangeRestaurantLocationState.bind(this);
    this.onChangeRestaurantLocationLat = this.onChangeRestaurantLocationLog.bind(this);
    this.onChangeRestaurantLocationLog = this.onChangeRestaurantLocationLat.bind(this);
    this.onChangeRestaurantItens = this.onChangeRestaurantItens.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      origins: [''],
      telephone: '',
      email: '',
      logo: '',
      description: '',
      slogan: '',
      location: { city: '', cep: '', state: '', lat: 0, log: 0},
      itens: ['']
    }
  }

  onChangeRestaurantName(e) {
    this.setState({name: e.target.value})
  }
  onChangeRestaurantOrigins(e) {
    this.setState({origins: e.target.value})
  }
  onChangeRestaurantTelephone(e) {
    this.setState({telephone: e.target.value})
  }
  onChangeRestaurantEmail(e) {
    this.setState({email: e.target.value})
  }
  onChangeRestaurantLogo(e) {
    this.setState({logo: e.target.value})
  }
  onChangeRestaurantSlogan(e) {
    this.setState({slogan: e.target.value})
  }
  onChangeRestaurantLocationCity(e) {
    this.setState({location: { city: e.target.value}})
  }
  onChangeRestaurantLocationCep(e) {
    this.setState({location: { cep: e.target.value}})
  }
  onChangeRestaurantLocationState(e) {
    this.setState({location: { state: e.target.value}})
  }
  onChangeRestaurantLocationLat(e) {
    this.setState({location: { lat: e.target.value}})
  }
  onChangeRestaurantLocationLog(e) {
    this.setState({location: { log: e.target.value}})
  }
  onChangeRestaurantDescription(e) {
      this.setState({description: e.target.value})
  }
  onChangeRestaurantItens(e) {
      this.setState({itens: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    
    const restaurant = {
      name: this.state.name,
      origins: this.state.origins,
      telephone: this.state.telephone,
      email: this.state.email,
      logo: this.state.logo,
      slogan: this.state.slogan,
      location: { city: this.state.location.city, cep: this.state.location.cep, state: this.state.location.state, latitude: this.state.location.lat, longitude: this.state.location.log},
      description: this.state.description,
      itens: this.state.itens
    };

    axios.post('http://localhost:8000/api/v1/register/restaurant/', restaurant)
      .then(res => console.log(`Restaurante cadastrado com sucesso! \n\n\n${res.data}`));
      console.log(`Restaurante salvo com sucesso!\n\n\nName: ${this.state.name}\n\nEmail: ${this.state.email}\n\nTelephone: ${this.state.telephone}\n\nState: ${this.state.location.state}\n\n\nDescription: ${this.state.slogan}`);
    
    Swal.fire({
      title: 'Salvo!',
      text: 'Restaurante Registrado com Sucesso!',
      icon: 'success',
      showCancelButton: false,
      showCloseButton: false,
      confirmButtonColor: '#00e676',
      confirmButtonText: 'Ok',
      confirmButtonText:'<Button>Ok</Button>',
      imageUrl: 'https://d25dk4h1q4vl9b.cloudfront.net/media/images/promotion-pill/5f4e3d171f63d7.21186319_Banner-novidades.png',
      imageHeight: 300,
      imageWidth: 300,
      imageAlt: 'Restaurante Imagem Logo',
      footer: '<a href>Deseja adicionar mais ítens ao seu cardápio?</a>'
    })

    this.setState({name: '', origins: '', telephone: '', email: '', image: '', slogan: '', location: { city: '', cep: '', state: '', latitude: '', longitude: ''}, itens: ''})
  }

  render() {
    return (<h1>CREATE RESTAURANT</h1>);
  }
}

