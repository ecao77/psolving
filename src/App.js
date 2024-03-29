import './App.css';
import React, {useState} from 'react';
import Navbar from './Navbar';
import Learn from './Learn';
import Home from './Home';
import About from './About';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <Router>
      <div className="App">
        <Navbar username = {username}/>
        <Routes>
          <Route path="/learn" element={<Learn username = {username}/>} /> 
          <Route path="/about" element={<About/>} />
          <Route
            path="/login"
            element={<Login onUsernameChange={handleUsernameChange} />} // Pass the function as a prop
          />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;