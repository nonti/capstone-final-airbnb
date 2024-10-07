import React, {useState} from 'react';
import './Signinup.css';
import {Link} from'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return; 
    }

    try {
      await axios.post('/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });
      toast.success('Signup successful!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
       
        toast.error("Signup failed. Please try again.");
      }
    }
  
  return (
    <div className='signin-signup-form'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input-container">
        <input type="text" name='username' placeholder='Username' value={formData.username} onChange={handleChange}/>
        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange}/>
        <input type="password" name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange}/>
        <select name='role' value={formData.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="host">Host</option>
          <option value="user">User</option>
        </select>

        <button type='submit'>Sign up</button>
        </div>
       
        <Link to='/signin' className='link'>Already have an account? <span>Sign in</span></Link>
    <ToastContainer />
      </form>
    </div>
  )
}

export default Signup;