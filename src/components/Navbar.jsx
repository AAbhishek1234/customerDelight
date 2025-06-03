import React, { useState } from 'react';

import {
  Navbar,
  Nav,
  Container,
  Button,
 
  FormControl,
  InputGroup
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './navbar.css';

const StyleMarketNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      console.log('Search term:', searchTerm);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-3 px-3 sticky-top">
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold fs-4 text-black" >
          Customer's Delight
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <InputGroup className="me-2 w-100">
            <FormControl 
              type="search"
              placeholder="Search for products or stores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              aria-label="Search"
              className='searchbar'
            />
            <Button variant="outline-primary" onClick={handleSearch} style={{color:"black",border:"1px solid black",textDecoration:"None",backgroundColor: "white"}}
            className='searchbutton'>
              <FaSearch />
            </Button>
          </InputGroup>

          <Nav className="ms-auto my-1 my-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/men'swear">Men's Wear</Nav.Link>
            <Nav.Link href="#">Women's Wear</Nav.Link>
            <Nav.Link href="#">Footwear</Nav.Link>
            <Nav.Link href="#">Stores</Nav.Link>
            <Nav.Link href="/about-us">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StyleMarketNavbar;
