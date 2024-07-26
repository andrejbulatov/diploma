import React, { Component } from 'react';
import { Button, Input, Form, FormGroup, Label, Container } from 'reactstrap';
import axios from 'axios';

class AdminFormAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
      title: '',
      color: '',
      size: '',
      tags: '',
      images: '',
      description: '',
      price: 0,
      success: false
    };
  }

  toggle = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  onSubmit = (title, price, color, size, tags, images, description) => {
    axios.post('/api/add/item', {
      title,
      price,
      color: (color.slice(0)+'').replace(/\s/g,'').split(','),
      size: (size.slice(0)+'').replace(/\s/g,'').split(','),
      tags: (tags.slice(0)+'').replace(/\s/g,'').split(','),
      images: (images.slice(0)+'').replace(/\s/g,'').split(','),
      description
    })
    .then(() => {
      window.location.reload(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onChangeTitle = (e) => this.setState({title: e.target.value})
  onChangePrice = (e) => this.setState({price: e.target.value})
  onChangeColor = (e) => this.setState({color: [e.target.value]})
  onChangesize = (e) => this.setState({size: e.target.value})
  onChangeTags = (e) => this.setState({tags: [e.target.value]})
  onChangeImages = (e) => this.setState({images: [e.target.value]})
  onChangeDescription = (e) => this.setState({ description: e.target.value })


  render() {
    const { title, price, color, size, tags, images, description } = this.state
    return (
      <Container style={{paddingTop: '50px', paddingBottom:'50px'}}>
      <h1>Добавить новый товар</h1>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Имя товара</Label>
          <Input placeholder='example: cool polo' value={this.state.title} onChange={this.onChangeTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Цена</Label>
          <Input placeholder='' value={this.state.price} onChange={this.onChangePrice} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Доступные цвета</Label>
          <Input placeholder='example: blue, red, yellow' value={this.state.color} onChange={this.onChangeColor} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Доступные размеры</Label>
          <Input placeholder='example: XS, L, XL' value={this.state.size} onChange={this.onChangesize} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Категория</Label>
          <Input placeholder='example: Polo' value={this.state.tags} onChange={this.onChangeTags} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Изображения</Label>
          <Input placeholder='example: http://link1.jpg, http://link2.jpg' value={this.state.images} onChange={this.onChangeImages} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Описание</Label>
          <Input type="textarea" value={this.state.description} onChange={this.onChangeDescription} />
        </FormGroup>
      </Form>
    <Button onClick={()=>this.onSubmit(
        title, 
        price, 
        color, 
        size, 
        tags,
        images,
        description
        )}>Сохранить</Button>  
      </Container>
    );
  }
}

export default AdminFormAddItem;