import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class AdminTableOrders extends Component {
  constructor(props){
    super(props);
    this.state={
      apiList: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/api/orders')
      const apiList = await response.data;
      this.setState({ apiList })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // const stylesColor = (color) => ({
    //   textDecoration: 'underline',
    //   textDecorationColor: color
    // })
    const { stylesTab1 } = this.props
    const { apiList } = this.state
    return (
      <Table responsive striped hover size="sm">
        <thead style={stylesTab1}>
          <tr >
            <th>#</th>
            <th>Дата</th>
            <th>Заказ</th>
            <th>Цена Заказа</th>
        
            <th>Почта</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Страна</th>
            <th>Город</th>
            <th>Область</th>
            <th>Почтовый индекс</th>
            <th>Телефон</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
        {
          apiList.map((x, index)=>
            <tr key={x._id}>
              <th scope="row">{index+1}</th>
      
              <td>{x.createdAt}</td>
              <td>{x.order.map(item=> <div>{`x${item.quantity} (${item.titleItem}[${item.selectedSize}, ${item.selectedColor}] ${item.price}₸) `}</div>)}</td>
              <td>{x.totalAmount+ ' ₸'}</td>
              
              <td>{x.customerinfo.email}</td>
              <td>{x.customerinfo.lastName}</td>
              <td>{x.customerinfo.firstName}</td>
              <td>{x.customerinfo.country}</td>
              <td>{x.customerinfo.city}</td>
              <td>{x.customerinfo.province}</td>
              <td>{x.customerinfo.postalCode}</td>
              <td>{x.customerinfo.phoneNumber}</td>
              <td>{x.customerinfo.address1 + ' ' +x.customerinfo.address2}</td>
            </tr>
            )
          }
        </tbody>
      </Table>
    )
  }
};
