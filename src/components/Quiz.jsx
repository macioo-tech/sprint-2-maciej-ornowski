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

  const { text, answers } = QUESTIONS[activeQuestion];
  console.log("Question", text);
  answers.forEach((item) => console.log(item));

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
    setActiveQuestion(activeQuestion + 1);
  };

  return (
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
  );
};

export default Quiz;
