import React, { useState, useEffect } from 'react';
import './Webpage.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, updateDoc, addDoc, getDocs, where, query, doc } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig.js';
import ExperienceBar from './ExperienceBar';
import confetti from 'canvas-confetti';
import Card from './Card';

function Learn( props ) {

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const {username} = props;
    const [problem,    setProblem]  = useState(null);
    const [userAnswer, setAnswer]   = useState(null);
    const [loading,    setLoading]  = useState(true);
    const [reveal,     setReveal]   = useState(false);
    const [correct,    setStatus]   = useState(true);
    const [currentXP,  setXP]       = useState(0); 
    const [completedProblems, setCompletedProblems] = useState([]);
    const [isNewProblem, setIsNewProblem] = useState(false);

    const problemsCollection = collection(db, 'problems');
    const progressCollection = collection(db, 'progress');
    const expCollection = collection(db, 'exp');

    async function fetchProblem () {
        const ID = `0000${Math.floor(Math.random() * 800)}`.slice(-4);
        const problemQuery = query(problemsCollection, where('id', '==', ID));

        try {
            const querySnapshot = await getDocs(problemQuery);
            if (!querySnapshot.empty) {
                const problem = querySnapshot.docs[0].data();
                setProblem(problem); 
            } else {
                setProblem(null);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching problem by title:', error);
            throw error;
        }
    };

    async function updateUser(problemId, correct) {
        let entry = {
            username: username,
            id: problemId,
            score: correct ? 1 : -1,
        };

        const progressQuery = query(progressCollection, where('id', '==', problemId), where('username', '==', username));

        try {
            const querySnapshot = await getDocs(progressQuery);

            if (querySnapshot.empty) {
                await addDoc(progressCollection, entry);
            }
            else {
                const progressRef = querySnapshot.docs[0].ref;
                const progress = querySnapshot.docs[0].data();

                if (correct) {
                    entry.score = progress.score + 1;
                } else {
                    entry.score = progress.score - 1;
                }

                await updateDoc(progressRef, entry);
            }
        } catch (error) {
            console.error('Error updating: ', error);
        }
    }

    const numericalAnswer = /#### (\d+)/;
    const equations = /\<<.*?>>/g;

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (userAnswer === problem.answer.match(numericalAnswer)[1]) {
            setCompletedProblems(prevCompletedProblems => [...prevCompletedProblems, problem]);
            setIsNewProblem(true);
            if(username !== '') {
                if (correct) {
                    updateUser(problem.id, true);
                } else {
                    updateUser(problem.id, false);
                }
            }
            setXP(currentXP + Math.floor(Math.random() * 50) + 100);
            {/* alert('Correct answer!'); */}

            setReveal(false);
            setStatus(true);
            fetchProblem();

            confetti({
                particleCount: 100,
                spread: 45,
                origin: { y: 0.4, x: 0.65 },
                gravity: 1,
                startVelocity: 20,
                ticks: 100,
            });


            setTimeout(() => {
            confetti.reset();
            }, 1000);

        } else {
            setStatus(false);
            setAnswer('');
            document.getElementById("answer-input").classList.add("shake");
            setTimeout(() => {
                document.getElementById("answer-input").classList.remove("shake");
            }, 500);
            {/* alert('Incorrect answer!'); */}
        }
        setAnswer('');
    };

    const handleForfeit = (e) => {
        e.preventDefault();

        setReveal(true);
        setStatus(false);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    async function fetchXP () {
        if(username !== '') {
            const xpQuery = query(expCollection, where('username', '==', username));
            try {
                const xpSnapshot = await getDocs(xpQuery);
                if (!xpSnapshot.empty) {
                    const exp = xpSnapshot.docs[0].data().xp;
                    setXP(exp);
                } else {
                    setXP(0);
                }
            } catch (error) {
                console.error('Error fetching problem by title:', error);
                alert(error);
            }
        }
    };
    
    useEffect(() => {fetchProblem(); fetchXP();}, []);

    useEffect(() => {
        if(username !== "") {
            const pushXP = async() => {
                const expQuery = query(expCollection, where('username', '==', username));
                const querySnapshot = await getDocs(expQuery);

                if (querySnapshot.empty) {
                    await addDoc(expCollection, {username: username, xp: currentXP});
                } else {
                    if (correct) {
                        const docRef = querySnapshot.docs[0].ref;
                        await updateDoc(docRef, {xp: currentXP});
                    }
                }
            }

            pushXP().catch(console.error);
        }
    }, [currentXP]);

    const renderCompletedProblems = () => {
        return (
            <div className="completed-problems">
                <h2>Completed Problems</h2>
                {completedProblems.slice().reverse().map((completedProblem, index) => (
                <div
                    key={index}
                    className={`card ${index === 0 && isNewProblem ? 'slide-in' : ''}`}
                    onAnimationEnd={() => {
                    if (index === 0 && isNewProblem) {
                        setIsNewProblem(false);
                    }
                    }}
                >
                    <Card problem={completedProblem} />
                </div>
                ))}
            </div>
        );
    };
    

    return (
        <header className="webpage">
            {/* <h1 className="Title"> Questions </h1> */}
            <ExperienceBar totalXP = {currentXP} />

            {loading ? (
                    <div className="fixed-box">
                    <p className="loading-text"> Loading... </p>
                    </div>
                ) : (
                <>
                    <div className="problem-box">
                        {problem ? (
                            <>
                                <p className="problem-text no-highlight"> {problem.question} </p>
                                {reveal && (
                                    <div className = "solution">
                                        <p className = "problem-text">
                                            Answer: {problem.answer.match(numericalAnswer)[1]}
                                        </p>
                                        <p className = "problem-text">
                                            {problem.answer.split('####')[0].replace(equations, '')}
                                        </p>
                                        <p className = "problem-text bold">
                                            Type the correct answer to move forward.
                                        </p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <p className="problem-text"> Problem not found </p>
                        )}
                    </div>
                    <div className="answer-form">
                        <input
                            id="answer-input"
                            className="answer-input no-highlight"
                            type = "text"
                            placeholder = "answer here"
                            value = {userAnswer}
                            onChange = {(e) => setAnswer(e.target.value)}
                            onKeyDown = {handleKeyPress}
                        />
                        <button className = "answer-button no-highlight" onClick = {handleSubmit}> Submit </button>
                        <button className = "forfeit-button no-highlight" onClick = {handleForfeit}> Give up </button>
                        <p className = "problem-text"> Answer: {problem.answer.match(numericalAnswer)[1]} </p>
                    </div>
                </>
            )}

            {renderCompletedProblems()}
        </header>
    );
}

export default Learn;