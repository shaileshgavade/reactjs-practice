import React from "react";
import QuizQuestion from "./quizQuestion"

export default function Quiz(props) {

    const questions = props.quizQuestions.map((question, index) => {
        return (
            <QuizQuestion
                key={index}
                question={question}
                index={index}
                selectOption={props.selectOption}
                showResult={props.showResult}
            />
        )
    })

    return (
        <div>
            {props.errorMessage && <p className="quiz--error">{props.errorMessage}</p>}
            {questions}
            {!props.showResult ?
                <button 
                    className="quiz--check-ans"
                    onClick={props.checkAnswers}
                >
                    Check Answers
                </button>
            :
                <div className="quiz-result-container">
                    <h4>You scored {props.ansCounts.correct}/{props.ansCounts.total} answers</h4>
                    <button 
                        className="quiz--restart"
                        onClick={props.restartQuiz}
                    >
                        Play again
                    </button>
                </div>
             }
        </div>
    )
}