import React, { useState } from 'react';
import Login from './App/Login';
import Signup from './App/Signup';
import './App.css'; // Import CSS

function App() {
  const [page, setPage] = useState('login');
  const [users, setUsers] = useState([{ username: 'admin', password: '1234' }]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  console.log("App","render")

  const handleLogin = (username, password) => {
    
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setLoggedInUser(username);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignup = (newUser) => {
    const exists = users.some(u => u.username === newUser.username);
    if (exists) {
      alert('Username already exists!');
    } else {
      setUsers([...users, newUser]);
      setLoggedInUser(newUser.username); // auto-login after signup
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setPage('login');
  };

  return (
    <div className="container">
      <div className={loggedInUser?"":'card'}>
        {loggedInUser ? (
          <>
            <h1>Welcome to Dashboard, {loggedInUser}!</h1>
            <p style={{color:'#f0f0f0'}}>This is a protected page.</p>
            <button style={{width:'100'}} onClick={handleLogout}>Logout</button>
          </>
        ) : page === 'login' ? (
          <Login onLogin={handleLogin} onSignupClick={() => setPage('signup')} />
        ) : (
          <Signup onSignup={handleSignup} onLoginClick={() => setPage('login')} />
        )}
      </div>
    </div>
  );
}

export default App;
