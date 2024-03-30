import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Webpage.css';

function About() {

    const [isHuman, setIsHuman] = useState(false);

    const onChange = (value) => {
        setIsHuman(true);
    };


return (
    <div className="webpage">
        <section className="hero-section">
            <div className="hero-content">
                <h1 className = "Title">About Us</h1>
                <p>Welcome to the Problem Solving Initiative (PSI), where homeschooling meets zero-cost interactive mathematics education! At PSI, we are dedicated to providing a dynamic online learning environment designed to enhance critical thinking skills in mathematics for homeschooled children.</p>
            </div>
        </section>

        <section className="mission-section">
            <div className="section-content">
                <h2>Our Mission</h2>
                <p>Fostering a love in mathematics requires a deep understanding of how things work together. With a database of thousands of hand-curated word problems selected to hone critical thinking in applicable real-world circumstances, we hope to bring mathematics to life for your child. </p>
            </div>
        </section>

        <section className="mission-section">
            <div className="section-content">
                <h2>Features</h2>
                <p><strong>Lightweight User Interface:</strong> Enjoy a user-friendly and intuitive interface designed for easy navigation and seamless user experience across devices.</p>
                <p><strong>Personal Accounts:</strong> Create personalized accounts to access exclusive features, track progress, and save preferences for a customized learning journey.</p>
                <p><strong>Complete Step-by-Step Solutions:</strong> Receive comprehensive step-by-step solutions for each problem, helping users understand the underlying concepts and reasoning behind the answers.</p>
                <p><strong>Experience Bar:</strong> Track your progress and mastery level with an experience bar that visually represents your achievements and encourages continuous improvement.</p>
                <p><strong>Progress Tracking:</strong> Keep track of previously completed problems and monitor your performance over time, enabling targeted practice and focused improvement in areas of difficulty.</p>
                <p><strong>Multi-platform Compatibility:</strong> Access the platform on various devices, including desktops, laptops, tablets, and smartphones, ensuring flexibility and convenience for users.</p>
                <p><strong>Secure and Privacy-Compliant:</strong> Prioritize user privacy and data security through encryption, secure authentication methods, and compliance with relevant privacy regulations such as GDPR and COPPA.</p>
            </div>
        </section>

        <section className="contact-section">
                <div className="section-content">
                    <h2>Contact Us</h2>
                    {isHuman ? (
                        <>
                            <p>Email: <span id="email">ecao787@gmail.com</span></p>
                        </>
                    ) : (
                        <>
                            <p>First, are you human?</p>
                            <ReCAPTCHA
                                sitekey ="6LckIakpAAAAAPFrpaKRxH5gi_fxxH1Pgk4GUIkT"
                                onChange = {onChange}
                                size = "normal"
                            />
                        </>
                    )}
                </div>
            </section>
    </div>

);
}

export default About;