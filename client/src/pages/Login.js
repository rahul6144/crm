import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/auth/login', formData);
      
      // Save token to localStorage
      localStorage.setItem('token', res.data.token);
      
      toast.success('Logged in successfully');
      navigate('/');
    } catch (err) {
      const errors = err.response?.data?.errors;
      
      if (errors) {
        errors.forEach(error => toast.error(error.msg));
      } else {
        toast.error('Login failed');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="input-field"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="input-field"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-primary hover:text-primary-dark"
            to="/register"
          >
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;