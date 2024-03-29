import React from 'react';
import './Webpage.css';

function Home() {
    return (
    <div>
        <header className="homepage-header">
            <h1 className = "Display">Welcome to <span className = "gradient"> SFLO. </span> </h1>
            <p className = "desc" >We help kids solve problems in a fun and interactive way!</p>
        </header>
    </div>
    );

}

export default Home;
