import React, { Component, useState } from "react";
import API_UAIFOOD from "../../utils/dataService";
import { List, Avatar, Button, Skeleton, Space, Card } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const data = [];
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;



for (let i = 0; i < 12; i++) {
  data.push({
    href: 'https://ant.design',
    name: `Mc Donalds ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default class RestaurantsList extends Component {
  state = {
    initLoading: true,
    loading: false,
    restaurants: [],
    list: [],
  };


  constructor(props) {
    super(props)
    this.state = {
      initLoading: false,
      restaurants: [],
      list: [],
    };
  }

  componentDidMount() {
    API_UAIFOOD.getAllRestaurants()
      .then(res => {
        this.setState({
          restaurants: res.data,
          list: this.restaurants,
          loading: false,
        });
      })
      .catch((e) => {
        console.log(e);
      })
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.restaurants.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });

  };

  render() {
    const { initLoading, loading, list } = this.state;

    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>mostrar mais</Button>
        </div>
      ) : null;

    return (



      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src={item.logo} />
                }
                title={<a href="/restaurants/${this.item.id}">{item.name}</a>}
                description={item.culinaria}
              />
              <div>{item.city}</div>
            </Skeleton>
          </List.Item>
        )}
      />



      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={item.itens}
        renderItem={menu => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            
              <List.Item.Meta
                title={<a href="/restaurants/${this.item.id}">{menu.price}</a>}
                description={menu.name}
              />
              <div>{item.city}</div>
            
          </List.Item>
        )}
      />














    );
  }
}