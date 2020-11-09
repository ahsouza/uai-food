import logo from './logo.svg';
import './App.css';
import Origins from './components/origins/allOrigins.js';
import HomePage from './pages/Home.js';
import Header from './components/header/Header.js';
import RestaurantList from './components/restaurant/listRestaurant.js';
import RestaurantListAll from './components/restaurant/listRestaurants.js';
import RestaurantUpdate from './components/restaurant/updateRestaurant.js';
import RestaurantCreate from './components/restaurant/createRestaurant.js';
import Teste from './components/restaurant/addRestaurant.js';
import RestaurantItensAdd from './components/restaurant/addIten.js';
import NotFound from './components/404/NotFound.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// ####################
// ####################
// ANT DESIGN FRAMEWORK
// ####################
// ####################
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
  Button
} from 'antd';
import 'antd/dist/antd.css';
import { 
  AudioOutlined,
  EditOutlined,
  EllipsisOutlined, 
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
const { Footer, Sider, Content } = Layout;
const { Option } = Select;
const { Search } = Input;
const { Meta } = Card;

// ####################
// ####################
// MATERIAL UI FRAMEWORK
// ####################
// ####################


const contentStyle = {
  height: '260px',
  padding: '30px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const gridStyle = {
  width: '10%',
  textAlign: 'center',
};

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

function App() {


  
  const  activateOrigin= ()=> {
    alert('Funcionou ;)')
  }

  return (
    <div className="App">

      <Layout>
          <Header/>

        <Content>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/restaurants" component={RestaurantListAll} />
            <Route path="/teste" component={Teste} />
            <Route path="/restaurants/:id" component={RestaurantList} />
            <Route path="/register/restaurant/" component={RestaurantCreate} />
            <Route path="/edit/restaurant/:id" component={RestaurantUpdate} />
            <Route path="/origins" component={Origins} />
          </Switch>
        </Content>


        <Footer>Footer</Footer>
      </Layout>

    </div>
  );
}

export default App;
