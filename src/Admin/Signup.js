import React, { useState } from 'react';
import '../Assets/css/Form.css';
import {useNavigate} from 'react-router-dom';

import { xSignup } from '../services/api';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    phone: '',
    email: '',
    password: '',
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await xSignup(formData);
      if (response.data === 'useradded') {
        alert('Signup Success !');
        navigate(-1);
      }
      else if (response.data === 'existingusername') {
        alert('Username Already Exsists !');
      }
    } catch (error) {
      alert('An error occurred');
      console.error(error);
    }
  };

  return (
    <div>
      <div className="form-container">
        <form className="form cardx" onSubmit={handleSignUp}>
          
          <p className="message"><h2>Sign Up Then Order Quick!!!</h2> </p>
          <div className="flex">
            <label>
              <input required placeholder="" type="text" className="input" name="username" value={formData.username} onChange={handleInputChange} />
              <span>Username</span>
            </label>
            </div>
            <label>
            
              <input required placeholder="" type="text" className="input" name="name" value={formData.name} onChange={handleInputChange} />
              <span>Name</span>
            </label>
          
          <label>
            <input required placeholder="" type="number" className="input" name="phone" value={formData.phone} onChange={handleInputChange} />
            <span>Phone</span>
          </label>
          <label>
            <input required placeholder="" type="email" className="input" name="email" value={formData.email} onChange={handleInputChange} />
            <span>Email</span>
          </label>
          <label>
            <input required placeholder="" type="password" className="input" name="password" value={formData.password} onChange={handleInputChange} />
            <span>Password</span>
          </label>
          <div className="submit-btn">
            <button className="Btn" type="submit">
              Sign Up
            </button>
          </div>
          
        </form>
      </div>
      
    </div>
  );
}
