import PropTypes from 'prop-types';
import React from 'react'
import { 
  Badge, 
  ListGroupItem, 
  Collapse,
  Col,
  Row
} from 'reactstrap';

const propTypes = {
  toggle: PropTypes.func.isRequired,
  step3: PropTypes.bool.isRequired,  
  step3Unlock: PropTypes.bool.isRequired, 
  getUserAddress: PropTypes.object.isRequired, 
  onSubmitOrder: PropTypes.func.isRequired
};

const CheckoutStepThree = ({
  styles,
  step3,
  step3Unlock,
  toggle,
  getUserAddress,
  onSubmitOrder,
  selectorTotalAmountCart,
  totalDelivery
}) => {

  const { 
  address1,
  address2,
  city,
  country,
  firstName,
  lastName,
  phoneNumber,
  postalCode,
  province
} = getUserAddress

  return (
    <div style={styles.collapsePannel}>
      <ListGroupItem disabled={!step3} >
          <h3 style={styles.collapasePannelTitle} onClick={()=>step3Unlock && toggle('step3')} >
            <Badge color="secondary" pill size='sm'>3</Badge>  Подтверждение
          </h3>
        <Collapse isOpen={step3}>
        <Row>
          <Col md="6">
            <h4>Адрес доставки:</h4>
            <div>Имя: <b>{firstName}</b></div>
            <div>Фамилия: <b>{lastName}</b></div>
            <div>Телефон: <b>{phoneNumber}</b></div>
            <div>Страна: <b>{country}</b></div>
            <div>Город: <b>{city}</b></div>
            <div>Область: <b>{province}</b></div>
            <div>Почтовый индекс: <b>{postalCode}</b></div>
            <div>Адрес: <b>{address1 + ' ' + address2}</b></div>
          </Col>
          <Col>
            <button onClick={onSubmitOrder}>Заказать</button>
          </Col>
        </Row>
        </Collapse>
      </ListGroupItem>
    </div>
  )
}

CheckoutStepThree.propTypes = propTypes;

export default CheckoutStepThree
