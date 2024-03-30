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
        <section className="section no-highlight">
            <h1 className = "Title">About Us</h1>
            <p>Welcome to the Problem Solving Initiative (PSI), where homeschooling meets zero-cost interactive mathematics education! At PSI, we are dedicated to providing a dynamic online learning environment designed to enhance critical thinking skills in mathematics for homeschooled children.</p>
        </section>

        <section className="section no-highlight">
            <h2>Our Mission</h2>
            <p>Fostering a love in mathematics requires a deep understanding of how things work together. With a database of thousands of hand-curated word problems selected to hone critical thinking in applicable real-world circumstances, we hope to bring mathematics to life for your child. </p>
        </section>

        <section className="section">
            <h2>Features</h2>
            <div class="features no-highlight">
                <div class="feature">
                    <div class="feature-title">Lightweight User Interface</div>
                    <p>Enjoy a user-friendly, intuitive interface designed for easy navigation and seamless user experience.</p>
                </div>
                <div class="feature">
                    <div class="feature-title">Progress Tracking</div>
                    <p>Keep track of previously completed problems via the problem list under the Learn! platform and monitor your performance over time.</p>
                </div>
                <div class="feature">
                    <div class="feature-title">Step-by-Step Solutions</div>
                    <p>Receive comprehensive step-by-step solutions for each problem to really understand the underlying concepts and reasoning behind each answer.</p>
                </div>
                <div class="feature">
                    <div class="feature-title">Personal Accounts</div>
                    <p>Create personalized accounts to track your progress and mastery level through experience points, encouraging continuous improvement.</p>
                </div>
                <div class="feature">
                    <div class="feature-title">Multi-platform Compatibility</div>
                    <p>Access the platform on various devices, including desktops, laptops, tablets, and smartphones.</p>
                </div>
                <div class="feature">
                    <div class="feature-title">Secure and Privacy-Compliant</div>
                    <p>We prioritize your privacy through encryption, secure authentication, and compliance with privacy regulations such as GDPR and COPPA.</p>
                </div>
            </div>
        </section>

        <section className="section">
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

        <div className="footer">
            Made with ❤️ from Houston, Texas
        </div>

    </div>

);
}

export default About;