import React, { useState } from 'react';
import axios from "axios";
import image from './image/Logo.png';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleApi = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    axios.post('https://4.188.244.11/login/', {
      email: email,
      password: password
    })
    .then(result => {
      console.log(result.data); // Assuming result.data contains response data
    })
    .catch(error => {
      console.error(error); // Log error for debugging
      // Display error to the user
    });
  }


  return (
    <div>
      <img src={image} alt="Logo" />
      <div className='wrapper'>
        <form>
          <h1>Login</h1>
          <div className='input-box'>
            <label htmlFor="email"/>
            <input value={email} onChange={handleEmail} type='text' id="email" placeholder='Email or Phone Number' required />
          </div>
          <div className='input-box'>
            <label htmlFor="password"/>
            <input defaultValue={password} onChange={handlePassword} type='password' id="password" placeholder='Password' required />
          </div>
          <div className='remember'>
            <label><input type="checkbox" /> Remember me</label>
          </div>
          <br />
          <button onClick={handleApi} type='button'>LOGIN</button>
          <br />
          <br />
          <a href='#'>Forgot Password?</a>
          <br />
          <br />
          <div className='register'>
            <p>Don't have an account?<a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;