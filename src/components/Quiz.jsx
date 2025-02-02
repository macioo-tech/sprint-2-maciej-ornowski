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

  const handleClick = () => {
    setActiveQuestion(activeQuestion + 1);
  }

  return (
    <div>
      <h1>Quiz</h1>
      <h2>{text}</h2>
      {answers.map((object, i) => (
        <Button value={object.text} onClick={handleClick} key={i}></Button>
      ))}
    </div>
  );
};

export default Quiz;
