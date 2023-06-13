import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { AddData } from '../services/api';

import AuthCheck from './Auth/AuthCheck';

export default function AddProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productname: '',
        counts: '',
        size: '',
        rating: '',
        
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await AddData(product);
            alert('Product added!');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <AuthCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card '>
                    <input type='text' placeholder='productname' name='productname' value={product.productname} onChange={handleInputChange} className='product-input' required/>
                    <input type='number' placeholder='counts' name='counts' value={product.counts} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='size' name='size' value={product.size} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='rating' name='rating' value={product.rating} onChange={handleInputChange} className='product-input' required />
                   
                    <button type='submit' className='button2'>Add Product</button>
                    
                </form>
            </div>
            
        </div>
    );
}
