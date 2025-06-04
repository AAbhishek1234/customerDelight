import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './stores.css';

const stores = [
  {
    id: 1,
    name: 'Fashion Forward',
    image: '/Images/store11.avif',
    // rating: 4.8,
    // location: 'New York',
    description: 'Premium clothing for modern professionals',
    path: '/fashion-forward',
  },
  {
    id: 2,
    name: 'Urban Kicks',
    image: '/Images/store2.avif',
    rating: 4.6,
    location: 'Los Angeles',
    description: 'Trendy footwear for all occasions',
    path: '/urban-kicks',
  },
  {
    id: 3,
    name: 'Elegance',
    image: '/Images/store3.avif',
    rating: 4.9,
    location: 'Paris',
    description: 'Elegant women\'s clothing and accessories',
    path: '/elegance',
  },
  {
    id: 4,
    name: 'Street Style',
    image: '/Images/store4.avif',
    rating: 4.5,
    location: 'Berlin',
    description: 'Urban streetwear and casual footwear',
    path: '/street-style',
  },
  {
    id: 5,
    name: 'Comfort Steps',
    image: '/Images/store5.avif',
    rating: 4.7,
    location: 'Milan',
    description: 'Comfortable and stylish shoes',
    path: '/comfort-steps',
  },
  {
    id: 6,
    name: 'Trendsetter',
    image: '/Images/store6.avif',
    rating: 4.4,
    location: 'Tokyo',
    description: 'Latest fashion trends for all',
    path: '/trendsetter',
  },
];

const Store = () => {
  const navigate = useNavigate();

  return (
    <Container className="store-container py-5">
      <h2 className="text-center mb-5 fw-bold">Explore Our Stores</h2>
      <Row className="g-4">
        {stores.map((store) => (
    <Col key={store.id} xs={6} sm={6} md={3}>

            <div className="store-card" onClick={() => navigate(store.path)}>
              <img src={store.image} alt={store.name} className="store-card-img" />
              <div className="store-card-body">
                <h5 className="fw-bold mb-1">{store.name}</h5>
                <p className="store-meta">
                  {/* <FaStar className="text-warning me-1" />
                  {store.rating} &nbsp;
                  <FaMapMarkerAlt className="text-muted me-1" /> */}
                  {/* {store.location} */}
                </p>
                <p className="text-muted small">{store.description}</p>
                <Button className="visit-btn" variant="primary">Visit Store</Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
