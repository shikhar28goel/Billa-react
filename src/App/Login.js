import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login({ onLogin, onSignupClick }) {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onLogin(formData.username, formData.password);
    };

    function startTimmer() {
        setInterval(() => {
          
          setCount((count)=> count + 1)
          
        }, 1000)
        
        
      }
      console.log(count)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // console.error('response:', JSON.stringify(response.data));
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                // console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h2>Login</h2>
            <div onClick={startTimmer}>dashboard</div>
            <form onSubmit={handleSubmit} style={{ justifyContent: 'center', alignSelf: 'center' }}>
                
                <input name="username" isValid={true} placeholder="Username" value={formData.username} onChange={handleChange} className="username" /><br /><br />


                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className='password' />
                <br />
                <br />

                <button type="submit" className='login'>Login</button> &nbsp;
                <button type="button" onClick={onSignupClick} className='signup'>Sign Up</button>
                {/* <ul>
                    {users.map((user) => <li key={user.id}>{user.name}</li>)}
                </ul> */}
            </form>
        </>
    );
}

export default Login;
