import React from 'react';
import {
  Navbar, Container, Row, Col,
} from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const styles = {
  container: {
    paddingTop: '1%',
  },
};

const App = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        React & Redux
      </Navbar.Brand>
    </Navbar>
    <Container style={styles.container}>
      <Row>
        <Col sm={8}>
          <ProductList />
        </Col>
        <Col sm={4}>
          <ShoppingCart />
        </Col>
      </Row>
    </Container>
  </>
);

export default App;
