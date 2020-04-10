import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { addToCart } from '../actionCreators';

const ProductList = ({ products, addToCart }) => (
  <CardDeck>
    {products.map((product) => (
      <Card style={{ width: '18rem' }} key={product.id}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title.
          </Card.Text>
          <Button variant="primary" onClick={() => addToCart(product)} role="button" disabled={product.inventory <= 0}>
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

const mapStateToProps = (state) => ({
  products: state.products,
});


const mapDispatchToProps = (dispatch) => ({
  addToCart(product) {
    dispatch(addToCart(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
