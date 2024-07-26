import PropTypes from 'prop-types';
import React from 'react'
import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap';

const propTypes = { getCart: PropTypes.array.isRequired };

const CheckoutMiniSummary = ({ getCart, selectorTotalAmountCart }) => (
  <ListGroup>
    <ListGroupItem>Детали Заказа</ListGroupItem>
    <ListGroupItem>
    {
      getCart.map(x=> 
        <Row key={x._id}>
          <Col xs='8'><p>x{x.quantity} {x.title}</p></Col>
          <Col xs='4'><p>{x.price}₸</p></Col>
        </Row>
      )
    }
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col xs='8'><p>Промежуточный итог</p></Col>
        <Col xs='4'><p>{selectorTotalAmountCart}₸</p></Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row>
        <Col xs='8'><p>Всего</p></Col>
        <Col xs='4'><b style={{fontSize: '25px'}}>{selectorTotalAmountCart}₸</b></Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

CheckoutMiniSummary.propTypes = propTypes;

export default CheckoutMiniSummary;
