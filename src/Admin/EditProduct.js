import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditData, FindData } from '../services/api';
import AuthCheck from './Auth/AuthCheck';

export default function EditProduct() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productname : '',
        counts: '',
        size: '',
        rating: '',
    
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await FindData(productId);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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
            await EditData(productId, product);
            alert('Product updated !');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <AuthCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card'>
                    <label>productname</label>
                    <input type='text' placeholder='productname' name='productname' value={product.productname} onChange={handleInputChange} className='product-input' required />
                    <label>counts</label>
                    <input type='number' placeholder='counts' name='counts' value={product.counts} onChange={handleInputChange} className='product-input' required />
                    <label>size</label>
                    <input type='number' placeholder='size' name='size' value={product.size} onChange={handleInputChange} className='product-input' required />
                    <label>rating</label>
                    <input type='number' placeholder='rating' name='rating' value={product.rating} onChange={handleInputChange} className='product-input' required />
                    
                    
                    <button type='submit' className='button2'>Update Product</button>
                </form>
            </div>
            
        </div>
    );
}
