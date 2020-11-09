import {
  Form,
  Select,
  Input,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  DatePicker,
  TimePicker,
  Cascader,
  Space,
  AutoComplete
} from 'antd';
import { UploadOutlined, ShopOutlined, PhoneOutlined, PictureOutlined, MailOutlined, SmileOutlined, InboxOutlined } from '@ant-design/icons';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 6 },
    md: { span: 6 },
    lg: { span: 6 },
    xl: { span: 6 },
    xxl: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 14 },
    sm: { span: 14 },
    md: { span: 14 },
    lg: { span: 14 },
    xl: { span: 14 },
    xxl: { span: 14 }
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      style={{ padding: '4%'}}
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        ['input-number']: 3,
        ['checkbox-group']: ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item 
        label="Nome Do Restaurante" 
        rules={[
          {
            required: true,
            message: 'Por favor, digite o nome de seu Restaurante!',
          },
        ]}
      >
       <Input placeholder="Digite o nome do seu Restaurante" prefix={<ShopOutlined />} />
      </Form.Item>
      <Form.Item 
        label="Email" 
        rules={[
          {
            required: true,
            message: 'Por favor, digite o e-mail de seu Restaurante!',
          },
        ]}
      >
       <Input placeholder="Digite seu E-mail" prefix={<MailOutlined />} />
      </Form.Item>
      <Form.Item 
        label="Telefone" 
        rules={[
          {
            required: true,
            message: 'Por favor, preencha o telefone de seu Restaurante!',
          },
        ]}
      >
      
          <Input.Group compact>
            <Select defaultValue="DDD" style={{ width: '26%', marginRight: '1%' }}>
              <Option value="27">31</Option>
              <Option value="21">32</Option>
              <Option value="21">33</Option>
              <Option value="21">34</Option>
              <Option value="21">35</Option>
              <Option value="21">37</Option>
              <Option value="21">38</Option>
            </Select>
            <AutoComplete
              style={{ width: '30%' }}
              placeholder="Número"
            />
          </Input.Group>
     </Form.Item>

      <Form.Item
        name="select"
        label="Cidade"
        hasFeedback
      >
        <Select placeholder="Selecione a cidade">
          <Option value="china">Belo Horizonte</Option>
          <Option value="china">Contagem</Option>
          <Option value="china">Ponte Nova</Option>
          <Option value="china">Jacinto</Option>
          <Option value="china">Almenara</Option>
          <Option value="china">Ipatinga</Option>
          <Option value="china">Santa Luzia</Option>
          <Option value="china">São Thomé Das Letras</Option>
          <Option value="china">Governador Valadares</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="culinaria-principal"
        label="Culinária Principal"
        rules={[
          {
            required: true,
            message: 'Selecione o tipo culinária de seu restaurante!',
            type: 'array',
          },
        ]}
      >
        <Select mode="multiple" placeholder="Selecione o tipo de culinária para seu restaurante">
          <Option value="Pizza">Pizza</Option>
          <Option value="Brasileira">Brasileira</Option>
          <Option value="Mexicana">Mexicana</Option>
          <Option value="Açaí">Açaí</Option>
          <Option value="Sorvetes">Sorvetes</Option>
          <Option value="Lanches">Lanches</Option>
          <Option value="Bebidas">Bebidas</Option>
          <Option value="Sucos">Sucos</Option>
          <Option value="Caldos">Caldos</Option>
          <Option value="Refeição">Refeição</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Cep">

          
          <Form.Item name="input-cep" noStyle>
            <Input style={{ width: '26%'}}/>
          </Form.Item>

      </Form.Item>

      <Form.Item label="Localização" style={{ marginBottom: 0 }}>
        <Form.Item
          name="latitude"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input placeholder="Latitude" />
        </Form.Item>

        <Form.Item
          name="longitude"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
        >
          <Input placeholder="Longitude" />
        </Form.Item>
      </Form.Item>


       <Form.Item 
        label="Slogan" 
      >
        <Input placeholder="Digite o slogan do Restaurante" prefix={<SmileOutlined />} />
      </Form.Item>

      <Form.Item label="Logomarca">
        <Form.Item name="dragger" valuePropName="logo" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Clique ou arraste a logomarca para esta área para fazer o upload</p>
            <p className="ant-upload-hint">Suporte para um ou mais arquivos .png/.jpg/.jpeg/.csv.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="success">
          Limpar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;