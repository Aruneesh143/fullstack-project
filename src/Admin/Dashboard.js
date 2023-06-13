import React, { useState, useEffect } from 'react';
import { GetData, DeleteData } from '../services/api';
import {Link, useNavigate } from 'react-router-dom';
import { AddBtn } from '../Componentes/Buttons';
import AuthCheck from './Auth/AuthCheck';

export default function Dashboard() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await GetData();
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await DeleteData(productId);
            alert('OOPS PRODUCT DELETED !');
            fetchProducts();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (productId) => {
        navigate(`/Dashboard/edit/${productId}`);
    
    };
    


    return (
        <div>
            <AuthCheck/>
            <div className='dashboard-content'>
                <table className='table-container card-square-0'>
                    <thead>
                        <tr>
                            <th>
                                <h1>productname</h1>
                            </th>
                            <th>
                                <h1>counts</h1>
                            </th>
                            <th>
                                <h1>size</h1>
                            </th>
                            <th>
                                <h1>rating</h1>
                            </th>
                            <th>
                                <h1>Edit here</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className='table-data'>{product.productname}</td>
                                <td className='table-data'>{product.counts}</td>
                                <td className='table-data'>{product.size}</td>
                                <td className='table-data'>{product.rating}</td>
                                <td className='table-actions form-btn-container'>
                                    <button onClick={() => handleEdit(product.id)} className='form-btn-x form-edit-btn'>
                                    <span className="material-symbols-outlined ico-x">edit</span>
                                    </button>
                                    
                                </td>
                                <td className='table-actions form-btn-container'>
                                <button onClick={() => handleDelete(product.id)} className='form-btn-x form-delete-btn'>
                                    <span className="material-symbols-outlined ico-x">delete</span>
                                    </button>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                <form>
                    <div>
                    <p className="signin"><Link to='/Signup'> REGISTER</Link> </p>
                    </div>
                </form>
                </table>
            </div>
            <AddBtn />
            
        </div>
    );
}
