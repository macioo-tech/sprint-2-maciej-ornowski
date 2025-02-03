import { useState } from "react";
import { QUESTIONS } from "../quizQuestions";
import Button from "./Button";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  //const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [summary, setSummary] = useState(false);

  const { text, answers } = QUESTIONS[activeQuestion];
  console.log("Question", text);
  answers.forEach((item) => console.log(item));
  console.log("Długość quizu:", QUESTIONS.length);
  console.log("Aktualne pytanie:", activeQuestion);

  const handleClick = (correct) => {
    if (correct) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + 1,
        correctAnswers: prev.correctAnswers + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }));
    }

    if (activeQuestion < QUESTIONS.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setActiveQuestion(0);
      setSummary(true);
    }
  };

  return (
    <div>
      {!summary ? (
        <div>
          <h1>Quiz</h1>
          <h2>{text}</h2>
          {answers.map((el, i) => (
            <Button
              value={el.text}
              onClick={() => handleClick(el.isCorrect)}
              key={i}
            ></Button>
          ))}
        </div>
      ) : (
        <div>
          <h1>Podsumowanie:</h1>
          <p>Poprawnych: {result.correctAnswers}</p>
          <p>Błędnych: {result.wrongAnswers}</p>
          <Button value="Rozpocznij od nowa"></Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
