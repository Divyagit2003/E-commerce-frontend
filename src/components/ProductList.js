import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styled/ProductList.css'; // Adjust the path if needed

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/p/getAll')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products', error));
  }, []);

  return (
    <>
      <div className="product-list-container row">
  {products.map(product => (
    <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="product-card">
        <div className="card-body">
          <h5 className="product-title">{product.name}</h5>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <Link to={`/product/${product.id}`} className="product-button">View Details</Link>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default ProductList;
