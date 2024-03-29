import React, {useState, useEffect} from "react";

const ExperienceBar = ({ totalXP }) => {
    
    const [isFlickering, setIsFlickering] = useState(false);


    useEffect(() => {
        if (isFlickering) {
            const flickerTimer = setTimeout(() => {
            setIsFlickering(false);
          }, 500); // Adjust the duration as needed
            return () => clearTimeout(flickerTimer);
        }
    }, [isFlickering]);

    useEffect(() => {
        setIsFlickering(true);
    }, [totalXP]);

    const baseXP = 200;
    const incrementalXP = 300;
    let level = 1;
    let currentXP = totalXP;

    while (currentXP - (incrementalXP * (level-1) + baseXP) >= 0) {
        currentXP -= (incrementalXP * (level-1) + baseXP);
        level++;
    }

    const levelXP = 200 + (level - 1) * 300;
    const xpPercentage = (currentXP / levelXP) * 100;

    return (
        <>
            <p className = "experience-desc top-space"> {totalXP} exp points </p>
            <div className="experience-bar">
                <div className={`experience-fill ${isFlickering ? 'flickering' : ''}`} style={{ width: `${xpPercentage}%`, transition: "width 0.5s" }}>
                </div>
            </div>        
            <p className="experience-bottom bottom-space">
                <span className="level-text">LEVEL {level}</span> 
                <span className="exp-text"> {levelXP-currentXP} exp to LEVEL {level+1} </span>
            </p>
        </>
    );  
};

export default ExperienceBar;
