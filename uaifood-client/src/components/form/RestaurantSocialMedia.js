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
  Card,
  AutoComplete
} from 'antd';
import { UploadOutlined, ShopOutlined, PhoneOutlined, PictureOutlined, MailOutlined, SmileOutlined, InboxOutlined } from '@ant-design/icons';
const { Option } = Select;
const { Meta } = Card;
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
        label="Usuário" 
      >
       <Input addonBefore="https://instagram.com/" addonAfter=".com" defaultValue="ahsouza" />
      
      </Form.Item>

      <Form.Item label="Cardápio" >
     
        <Card
          hoverable
          style={{ display: 'inline-block', marginRight: '2%', marginTop: '10%', marginLeft: '12%', width: 160 }}
          cover={<img alt="example" src="https://instagram.fvix2-2.fna.fbcdn.net/v/t51.2885-15/e35/118679033_710854739500226_6210723103466544922_n.jpg?_nc_ht=instagram.fvix2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=17A-Aho3nNUAX85WhIr&tp=18&oh=042973bf7634b2eb1dfffbbd4e7c2a45&oe=5FCE6137" />}
        >
          <Meta description="post" />
        </Card>
        <Card
          hoverable
          style={{ display: 'inline-block', marginRight: '2%', marginTop: '10%', width: 160 }}
          cover={<img alt="example" src="https://instagram.fvix2-2.fna.fbcdn.net/v/t51.2885-15/e35/118679033_710854739500226_6210723103466544922_n.jpg?_nc_ht=instagram.fvix2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=17A-Aho3nNUAX85WhIr&tp=18&oh=042973bf7634b2eb1dfffbbd4e7c2a45&oe=5FCE6137" />}
        >
          <Meta description="post" />
        </Card>
        <Card
          hoverable
          style={{ display: 'inline-block', width: 160 }}
          cover={<img alt="example" src="https://instagram.fvix2-2.fna.fbcdn.net/v/t51.2885-15/e35/118679033_710854739500226_6210723103466544922_n.jpg?_nc_ht=instagram.fvix2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=17A-Aho3nNUAX85WhIr&tp=18&oh=042973bf7634b2eb1dfffbbd4e7c2a45&oe=5FCE6137" />}
        >
          <Meta description="post" />
        </Card>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
      </Form.Item>
    </Form>
  );
};

export default Demo;