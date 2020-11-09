import logo from './logo.svg';
import './App.css';
import Origins from './components/origins/allOrigins.js';
import RestaurantList from './components/restaurant/listRestaurant.js';
import RestaurantListAll from './components/restaurant/listRestaurants.js';
import RestaurantUpdate from './components/restaurant/updateRestaurant.js';
import RestaurantCreate from './components/restaurant/createRestaurant.js';
import RestaurantItensAdd from './components/restaurant/addIten.js';
import NotFound from './components/404/NotFound.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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


const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
const { Search } = Input;
const { Meta } = Card;

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
        <Header>
        </Header>

        <Content>

              <Card title="Tipos De Culinária">
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Pizza</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                  Content
                </Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Árabe</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Açaí</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Argentina</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Bebidas</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Brasileira</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Baiana</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Carnes</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Conveniência</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Cozinha</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Congelados</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Doces</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Marítimos</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Francesa</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Frangos</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Italiana</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Japonesa</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Lanches</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Marmita</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Mexicana</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Mercado</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Mineira</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Padaria</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Portuguesa</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Peixes</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Pastel</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Refeição</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Sucos</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Sorvetes</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Salgados</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Caldos</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Tapioca</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Vegetariana</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Vegana</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Variada</Card.Grid>
                <Card.Grid onClick={activateOrigin} style={gridStyle}>Yakisoba</Card.Grid>
              </Card>

          


              <img src={logo} className="App-logo" alt="logo" />
              
                <Search placeholder="Buscar cidade" size="middle" onSearch={onSearch} enterButton allowClear/>
              
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>



              <Row>

                <Col xs={{ span: 12, offset: 1 }} sm={{ span: 11, offset: 1 }} md={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                   <Card
                    hoverable
                    style={{ width: 280, height: 120 }}
                    cover={
                      <img
                        style={{ height: 120 }}
                        alt="example"
                        src="https://d25dk4h1q4vl9b.cloudfront.net/media/images/promotion-pill/5f4e3d171f63d7.21186319_Banner-novidades.png"
                      />
                    }
                    >
                    <Meta
                      avatar={<Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src="https://i.pinimg.com/originals/2c/f1/a2/2cf1a2cf927099647b008ee0827432c1.png" alt="logo-restaurant" shape="square" icon={<UserOutlined />} />}
                      title="MC Donald's"
                      description="Lanches - 2,7 Km"
                    />
                  </Card>
                </Col>


                <Col xs={{ span: 12, offset: 1 }} sm={{ span: 11, offset: 1 }} md={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Card
                    hoverable
                    style={{ width: 280, height: 120 }}
                    cover={
                      <img
                        style={{ height: 120 }}
                        alt="example"
                        src="https://d25dk4h1q4vl9b.cloudfront.net/media/images/promotion-pill/5f4e3d171f63d7.21186319_Banner-novidades.png"
                      />
                    }
                  >
                    <Meta
                      avatar={<Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src="data:image/jpeg;base64,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" alt="logo-restaurant" shape="square" icon={<UserOutlined />} />}
                      title="Burguer King"
                      description="Lanches - 3,5 Km"
                    />
                  </Card>
                </Col>


                <Col xs={{ span: 12, offset: 1 }} sm={{ span: 11, offset: 1 }} md={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Card
                    hoverable
                    style={{ width: 280, height: 120 }}
                    cover={
                      <img
                        style={{ height: 120 }}
                        alt="example"
                        src="https://d25dk4h1q4vl9b.cloudfront.net/media/images/promotion-pill/5f4e3d171f63d7.21186319_Banner-novidades.png"
                      />
                    }
                  >
                    <Meta
                      avatar={<Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6qQRHautrShpCDn3U5W6SvB8tZnsGXSQV4g&usqp=CAU" alt="logo-restaurant" shape="square" icon={<UserOutlined />} />}
                      title="Red Elephant"
                      description="Pizza - 1,3 Km"
                    />
                  </Card>
                </Col>

              </Row>
        </Content>


        <Footer>Footer</Footer>
      </Layout>

    </div>
  );
}

export default App;
