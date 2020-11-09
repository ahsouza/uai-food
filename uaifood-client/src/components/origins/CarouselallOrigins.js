import './../../App.css';
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
  Button,
  Tooltip
} from 'antd';
import 'antd/dist/antd.css';
import { 
  AudioOutlined,
  EditOutlined,
  EllipsisOutlined, 
  SettingOutlined,
  UserOutlined,
  SearchOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  CheckOutlined,
} from '@ant-design/icons';


const { Meta } = Card;

const contentStyle = {
  height: '150px',
  padding: '30px',
  color: '#c62828',
  lineHeight: '60px',
  textAlign: 'center',
  background: '#fff',
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
      <Carousel autoplay>

        <section>
          <div style={contentStyle}>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Árabe</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Açaí</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Argentina</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Bebidas</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Brasileira</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Baiana</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Carnes</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Congelados</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Doces</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Marítimos</Card.Grid>
          </div>
        </section>
        <section>
          <div style={contentStyle}>
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
          </div>
        </section>

        <section>
          <div style={contentStyle}>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Sucos</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Sorvetes</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Salgados</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Tapioca</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Vegetariana</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Vegana</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Variada</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Yakisoba</Card.Grid>
            <Card.Grid onClick={activateOrigin} style={gridStyle}>Pizza</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
            Refeição
            </Card.Grid>
          </div>
        </section>

      </Carousel>
    </div>
    );
  }

  export default App;
