import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import './productdetail.css';
import Navbar from '../components/Navbar'
const ProductDetails = () => {
  const { state: product } = useLocation();
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <p>Product not found.</p>;

  return (
    <>
    <Navbar/>
     {/* <Container className="py-5"> */}
        <h1 className="text-center mb-4">{product.storeName}</h1> 
    <div className="product-details container">
      <div className="product-grid">
        {/* Left: Images */}
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
        
        </div>

        {/* Right: Info */}
        <div className="product-info">
          {/* <p className="breadcrumb">Shop all / Category / Product name</p> */}
          <h1>{product.name}</h1>
          {/* <p className="price">{product.price}</p> */}
          {/* <p className="rating">⭐ 4.5 stars - 156 reviews</p> */}
          <p className="desc">{product.description}</p>

          {/* Size Options */}
          <div className="options">
            {/* <label>Size</label> */}
            {/* {product.sizes ? (
              <div className="size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? 'active' : ''}
                  >
                    {size}
                  </button>
                ))}
              </div>
            ) : (
              <p>No size options available</p>
            )} */}

            {/* <label>Variant</label>
            <select>
              <option>Select</option>
              <option>Black</option>
              <option>Green</option>
            </select>

            <label>Qty</label>
            <input type="number" defaultValue={1} min={1} /> */}
          </div>

          {/* Buttons */}
          <div className="button-group">
            {/* <button className="btn-cart">Add to Cart</button> */}
            <button className="btn-buy">Click to connect</button>
          </div>
        </div>
      </div>
    </div>
    {/* </Container> */}
    </>
  );
};

export default ProductDetails;
