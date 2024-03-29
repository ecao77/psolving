import React, { useState } from 'react';
import './Webpage.css';

function Login( {onUsernameChange} ) {

    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (isValidUsername(username)) {
            setIsLoggedIn(true);
            onUsernameChange(username); // Update the parent component's username state
        } else {
            alert('Invalid username: no special characters, no spaces, less than 25 characters.');
        }
    };

    const usernameConvention = /^[a-zA-Z0-9]{1,24}$/;
    const isValidUsername = (inputUsername) => {
        return (usernameConvention.test(inputUsername));
    };

    return (
        <div>
            <header className="homepage-header"> 
                <div className = "login-box">
                    <h1 className = "Display"> Login</h1> 
                    {isLoggedIn ? (
                        <p className = "login-welcome bold"> Welcome, {username}! </p>
                        ) : (
                        <form onSubmit={handleSubmit} className = "login-form">
                            <p className = "login-desc"> username </p>
                            <label>
                                <input 
                                    className = "login-input"
                                    type="text"
                                    value={username}
                                    onChange = {(e) => setUsername(e.target.value)}
                                />
                            </label>
                            <button type="submit" className = "login-button"> 
                                Go 
                            </button>
                            <p className = "login-tidbit"> To save your progress, use the same username. </p>
                        </form>)
                    }
                </div>
            </header>
        </div>
    );
}

export default Login;