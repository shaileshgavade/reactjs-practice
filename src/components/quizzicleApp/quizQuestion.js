import React from "react";
import he from 'he'



export default function QuizQuestion(props) {
    const question = props.question;
    const opts = question.options

    let options = opts.map((key, val) => {
        let correctClass = (key === question.correct_answer ? "option-correct" : "");
        let unselectedClass = (key !== question.correct_answer && question.selectedItem !== key ? "option-unselected" : "");
        return (
            <li className={
                   (`${question.selectedItem === key ? "option-selected" : ""} ${unselectedClass} ${correctClass} `).trim()
                }
                key={key}
                onClick={() => props.selectOption(props.index, key)}
            >
                {he.decode(key)}
            </li>
        )
    })

    return (
        <div className={(`quiz-question ${props.showResult ? "quiz-result":""}`).trim()}>
            <h4>{he.decode(question.question)}</h4>
            <ul className="question-options">{options}</ul>
        </div>
    )
}