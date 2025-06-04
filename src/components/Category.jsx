import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';

const categories = [
  {
    title: 'Men',
    image: '/Images/men2.avif',
    path: '/men',
  },
  {
    title: 'Women',
    image: '/Images/woman2.avif',
    path: '/women',
  },
  {
    title: 'Kids',
    image: '/Images/kids2.avif',
    path: '/kids',
  },
];

const SplitCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="split-container">
      <h2 className="category-heading"> Explore Categories</h2>
      <div className="split-grid">
        {categories.map((cat) => (
          <div
            className="split-item"
            key={cat.title}
            onClick={() => navigate(cat.path)}
          >
            <div
              className="background"
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <div className="overlay">
              <h3>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitCategory;
