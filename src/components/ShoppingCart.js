import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { removeFromCart } from '../actionCreators';

const styles = {
  footer: {
    fontWeight: 'bold',
  },
};

const ShoppingCart = ({ cart, removeFromCart }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Header>Shopping Cart</Card.Header>
    <Table>
      <tbody>
        {cart.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td className="text-right">
              $
              {product.price}
            </td>
            <td className="text-right">
              <Button size="sm" variant="danger" onClick={() => removeFromCart(product)}>
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
            {cart.reduce((sum, product) => sum + product.price, 0)}
          </td>
        </tr>
      </tfoot>
    </Table>
  </Card>
);

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart(product) {
    dispatch(removeFromCart(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
