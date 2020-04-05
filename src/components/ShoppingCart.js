import React, { Component } from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const styles = {
  footer: {
    fontWeight: 'bold',
  },
};

class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: [],
    };
  }

  removeFromCart = (product) => {
    console.log(product);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Header>Shopping Cart</Card.Header>
        <Table>
          <tbody>
            {this.state.cart.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">
                  $
                  {product.price}
                </td>
                <td className="text-right">
                  <Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}>
                    <FaTrashAlt />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: $
                {this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>
      </Card>
    );
  }
}

export default ShoppingCart;
