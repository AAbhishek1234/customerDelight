import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './footer.css'; // Custom styles

const Footer = () => {
  return (
    <footer className="footer-section text-light">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h4 className="footer-brand">Customer's Delight</h4>
            <p className="footer-text">
              Discover premium products curated just for you. Shop smart. Shop stylish.
            </p>
          </Col>

          <Col md={2}>
            <h6 className="footer-title">Explore</h6>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="footer-title">Newsletter</h6>
            <Form className="footer-form">
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>
              <Button variant="outline-light" size="sm" className="mt-2">Subscribe</Button>
            </Form>
          </Col>

          <Col md={3}>
            <h6 className="footer-title">Connect</h6>
            <div className="footer-social">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom text-center mt-4">
          <hr className="border-light" />
          <p className="mb-0 small">&copy; {new Date().getFullYear()} ShopMate — All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
