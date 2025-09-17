import React, { useState } from 'react';

function Signup({ onSignup, onLoginClick }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.username) errs.username = 'Username is required';
    if (!formData.password) errs.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }
    return errs;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSignup({ username: formData.username, password: formData.password });
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="username" 
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="username" 
        />
        
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        <br /><br />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="username" 
        />
        {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
        <br /><br />

        <button type="submit" className='login'>Register</button> &nbsp;
        <button type="button" onClick={onLoginClick} 
        style={{
          width: 100,
          height: 30,
          borderRadius: 4,
          marginLeft: 0.2,
          borderColor: '#3e4452',
          backgroundColor: '#d6d6d6',
          // color: white,
        }}>Back to Login</button>
      </form>
    </>
  );
}

export default Signup;
