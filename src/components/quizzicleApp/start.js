import React from "react";

export default function Start(props) {
    return (
        <div className="quiz--start">
            <h3>Quizzicle</h3>
            <p>quizzicle game app</p>
            <button className="quiz--start-button" onClick={props.startNewQuiz}>Start</button>
        </div>
    )
}