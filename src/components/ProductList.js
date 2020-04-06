import React, { Component } from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import store from '../store';
import { addToCart } from '../actionCreators';

class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: [
        {
          id: 1, name: 'Hipster Ultimate', price: 299, image: 'https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg',
        },
        {
          id: 2, name: 'On Motion Live', price: 99, image: 'https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg',
        },
        {
          id: 3, name: 'Underground Max', price: 149, image: 'https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg',
        },
      ],
    };
  }

  addToCart = (product) => {
    store.dispatch(addToCart(product));
  }

  render() {
    return (
      <CardDeck>
        {this.state.products.map((product) => (
          <Card style={{ width: '18rem' }} key={product.id}>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title.
              </Card.Text>
              <Button variant="primary" onClick={() => this.addToCart(product)} role="button" disabled={product.inventory <= 0}>
                $
                {product.price}
                {' '}
                <FaShoppingCart />
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    );
  }
}

export default ProductList;
