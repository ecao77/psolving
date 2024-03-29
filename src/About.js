import React from 'react';
import './Webpage.css';

function About() {
return (


    <div className="webpage">
        <section className="hero-section">
            <div className="hero-content">
                <h1 className = "Title">Welcome to Our About Page</h1>
                <p>Learn more about us and our mission</p>
            </div>
        </section>

        <section className="mission-section">
            <div className="section-content">
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus justo nec elit fermentum, vitae tempor risus hendrerit. Vivamus a ante id nisi lacinia vehicula.</p>
            </div>
        </section>

        <section className="team-section">
            <div className="section-content">
                <h2>Our Team</h2>
                <div className="team-members">
                    {/* Placeholder for team members */}
                    <div className="team-member">
                        <img src="placeholder.jpg" alt="Team Member" />
                        <h3>John Doe</h3>
                        <p>Co-founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="placeholder.jpg" alt="Team Member" />
                        <h3>Jane Smith</h3>
                        <p>Co-founder & CTO</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-section">
            <div className="section-content">
                <h2>Contact Us</h2>
                <p>Email: info@example.com</p>
                <p>Phone: 123-456-7890</p>
                {/* Add more contact information as needed */}
            </div>
        </section>
    </div>

);
}

export default About;