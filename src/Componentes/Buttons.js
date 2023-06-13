import React from 'react';
import { useNavigate } from 'react-router-dom';



const LoginBtn = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/Signin');
    };

    return (

        <button className="route-btn xy-1 " onClick={navigateLogin}>
            <div className="sign">
                <span className="material-symbols-outlined">account_circle</span>
            </div>
            <div className='text'>Login</div>
        </button>
    )
};


const AddBtn = () => {
    const navigate = useNavigate();

    const navigateAdd = () => {
        navigate('/Dashboard/add');
    };

    return (

        <button className="route-btn xy-2 " onClick={navigateAdd}>
         Add
        </button>
    )
};

export {  LoginBtn,  AddBtn };
