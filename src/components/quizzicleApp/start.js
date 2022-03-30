import React from "react";

export default function Start(props) {
    return (
        <div className="quiz--start">
            <h3>Quizzicle</h3>
            <p>quizzicle app game</p>
            <button className="quiz--start-button" onClick={props.startNewQuiz}>Start</button>
        </div>
    )
}