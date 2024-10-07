import React, {useState, useContext} from 'react';
import './Signinup.css';
import {Link, useNavigate} from'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../context/userContext';

const Signin = () => {
  const [formData, setFormData] = useState({ username: '', password: '', });
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
       const {data} = await axios.post('/signin', { username:formData.username, password:formData.password });
       setUser(data);
       if (data.role === 'host') {
        navigate('/admin'); // Redirect to admin page
      } else {
        navigate('/reservations'); // Redirect to the home page
      }
      toast.success('Sign in successful');
    }catch(error){
      toast.error('Sign in failed. Please try again.');
    }
    
  };
  return (
    <div className='signin-signup-form'>
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <div className="input-container">
      <input type="text" name='username' placeholder='Username' value={formData.username} onChange={handleChange}/>
      <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange}/>


      <button type='submit'>Sign in</button>
      </div>
     
      
      <Link to='/signup' className='link'>Dont have an account? <span>Sign up</span></Link>

    </form>
  </div>
  )
}

export default Signin
