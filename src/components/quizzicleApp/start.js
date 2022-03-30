import React from "react";

export default function Start(props) {
    return (
        <div className="quiz--start">
            <h1>Quizzicle</h1>
            <p>quizzicle game app</p>
            <button className="quiz--start-button" onClick={props.startNewQuiz}>Start Quiz</button>
        </div>
    )
}