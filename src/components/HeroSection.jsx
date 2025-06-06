import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './hero.css';

import { useNavigate } from 'react-router-dom';
const Heros = () => {
const navigate = useNavigate();
const clickHandler = () => navigate("/men'swear");
const womenClick = () => navigate("/women'swear");
const storeClick = () => navigate("/stores");
  return (
    <div className="hero-section d-flex align-items-center" style={{
    backgroundImage:
      " url('/Images/backgroundimg.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight:"90vh",
    
  }}>
      <Container className="text-start text-white">
        <h3 className="display-4 fw-bold mb-3">Discover Unique Fashion 
          <br/>Stores
        </h3>
        <p className="lead mb-3">
          Connect directly with store owners for a personalized<br/> shopping experience.
        </p>
        <p className="lead mb-4">
          Find the perfect style from our curated collection of independent<br/> fashion stores.
        </p>
        <div className="d-flex flex-wrap gap-3">
          <Button variant="light" className="text-primary fw-bold px-4 py-2" onClick={clickHandler}>Men</Button>
          <Button variant="light" className="text-primary fw-bold px-4 py-2" onClick={womenClick}>Women</Button>
          <Button variant="light" className="text-primary fw-bold px-4 py-2" onClick={storeClick}>Stores</Button>
        </div>
      </Container>
    </div>
  );
};

export default Heros;
