import { useState } from "react";
import { QUESTIONS } from "../quizQuestions";
import Button from "./Button";
import Summary from "./Summary";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [result, setResult] = useState(0);
  const [summary, setSummary] = useState(false);

  const { text, answers } = QUESTIONS[activeQuestion];

  //console.log("Question", text);
  //answers.forEach((item) => console.log(item));
  //console.log("Długość quizu:", QUESTIONS.length);
  //console.log("Aktualne pytanie:", activeQuestion);
  //console.log("Poprawne odp:", result);
  
  const handleClick = (correct, i) => {
    if (correct) setResult(result + 1);

    if (activeQuestion < QUESTIONS.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setActiveQuestion(0);
      setSummary(true);
    }
    setSelectedAnswer([
      ...selectedAnswer,
      {
        question: text,
        answer: answers[i].text,
        isCorrect: answers[i].isCorrect,
      },
    ]);
  };

  //console.log("Selected:", selectedAnswer);

  return (
    <div>
      {!summary ? (
        <div>
          <h2>{text}</h2>
          {answers.map((el, i) => (
            <Button
              value={el.text}
              onClick={() => handleClick(el.isCorrect, i)}
              key={i}
            ></Button>
          ))}
        </div>
      ) : (
        <>
          <Summary value={result} answers={selectedAnswer} />
        </>
      )}
    </div>
  );
};

export default Quiz;
