import axios from 'axios';
import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap';
import '../styled/AddProduct.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8085/p/save', product)
          .then((response) => {
            console.log('Product added:', response.data);
            // Handle success (e.g., clear form, show success message)
            setProduct({ id: '', name: '', description: '', price: '' });
          })
          .catch((error) => {
            console.error('There was an error adding the product!', error);
            // Handle error (e.g., show error message)
          });
      };
    
      return (
        <>
        <Navbar />
        <div class="myDiv mt-5 pt-5">
        <h2>Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Id:</label>
              <input type="text" name="id" value={product.id} onChange={handleChange} required />
            </div>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={product.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Description:</label>
              <input type="text" name="description" value={product.description} onChange={handleChange} required />
            </div>
            <div>
              <label>Price:</label>
              <input type="number" step="0.01" name="price" value={product.price} onChange={handleChange} required />
            </div>
            <button type="submit">Add Product</button>
          </form>
        </div>
        </>
      );
    };
    
    export default AddProduct;
    