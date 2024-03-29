import React, { useState } from 'react';
import Collapsible from 'react-collapsible'; // Assuming you have successfully resolved the 'react-collapsible' module

function Card({ problem }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const equations = /\<<.*?>>/g;

    return (
        <>
            <div className="card">
                <div className="card-top card-color1 no-highlight" onClick={toggleOpen}>
                    <p className="card-text">{problem.question}</p>
                </div>
                <Collapsible open={isOpen}>
                    <div className="card-bottom card-color2 no-highlight">
                        <p className="card-text">{problem.answer.split('####')[0].replace(equations, '')}</p>
                    </div>
                </Collapsible>
            </div>
            <div className = "little-break"> 
                
            </div>
        </>
    );
}

export default Card;