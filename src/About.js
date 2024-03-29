import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Webpage.css';

function About() {

    const [isHuman, setIsHuman] = useState(false);

    const onChange = (value) => {
        setIsHuman(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isVerified) {
            // Handle form submission here, maybe you can use a backend service to send an email
            console.log("Form submitted successfully!");
        } else {
            alert("Please verify that you are not a robot.");
        }
    };


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

        <section className="contact-section">
                <div className="section-content">
                    <h2>Contact Us</h2>
                    {isHuman ? (
                        <>
                            <p>Email: <span id="email">info@example.com</span></p>
                        </>
                    ) : (
                        <ReCAPTCHA
                            sitekey="6LckIakpAAAAAPFrpaKRxH5gi_fxxH1Pgk4GUIkT"
                            onChange = {onChange}
                        />
                    )}
                </div>
            </section>
    </div>

);
}

export default About;