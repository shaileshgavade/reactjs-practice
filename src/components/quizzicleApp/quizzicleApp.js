import React from "react";
import Start from "./start"
import Quiz from "./quiz"

export default function QuizzicleApp() {

    const [newStart, setNewStart] = React.useState(false);
	const [quizQuestions, setQuizQuestions] = React.useState([]);
	const [allAnswered, setAllAnswered] = React.useState(false)
	const [showResult, setShowResult] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState('');
	const [ansCounts, setAnsCounts] = React.useState({});

	React.useEffect(() => {
		setErrorMessage("");
		if (quizQuestions.length > 0) {
			setAllAnswered(() => {
				let answeredAll = true;
				Object.entries(quizQuestions).forEach(
					([key, value]) => {
						if (value.selectedItem == "") {
							answeredAll = false;
						}
					}
				)
				return answeredAll;
			})
		}
	}, [quizQuestions])

	async function startNewQuiz() {
		setNewStart(true);
		await getQuizQuestions();
	}

	async function getQuizQuestions() {
		await fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
		.then(res => res.json())
		.then(data => {
			setQuizQuestions(data.results.map(element => {
				return {
					...element, 
					selectedItem: "",
					options: [...element.incorrect_answers, element.correct_answer].sort(() => Math.random() - 0.5)
				}
			}))
		})
	}

	function selectOption(qId, selectedItem) {
		setQuizQuestions((prevQsts) => (prevQsts.map((prevQtn, index) => {
			if (qId === index) {
				prevQtn.selectedItem = selectedItem
			}
			return prevQtn;
		})))

	}

	async function checkAnswers() {
		if (allAnswered) {
			setShowResult(true);
			setErrorMessage("");
			setAnsCounts(getAnsCount())
		} else {
			setErrorMessage("**Select alteast one option of each question");
		}
	}

	function getAnsCount() {
		let total = quizQuestions.length;
		let correct = 0;
		Object.entries(quizQuestions).forEach(
			([key, value]) => {
				if (value.selectedItem == value.correct_answer) {
					correct = correct + 1
				}
			}
		)
		return {correct: correct, total: total}
	}

	function restartQuiz() {
		setAllAnswered(false);
		setShowResult(false);
		setAnsCounts({});
		getQuizQuestions();
	}

    return (
        <div className="quiz">
			{!newStart ? 
				<Start 
					newStart={newStart}
					startNewQuiz={() => startNewQuiz()}
				/>
			:
				<Quiz
					quizQuestions={quizQuestions}
					selectOption={selectOption}
					checkAnswers={checkAnswers}
					showResult={showResult}
					allAnswered={allAnswered}
					errorMessage={errorMessage}
					ansCounts={ansCounts}
					restartQuiz={restartQuiz}
				/>
			}
        </div>
    )
}