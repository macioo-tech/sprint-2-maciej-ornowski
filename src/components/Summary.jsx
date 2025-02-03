import { useState } from "react";
import App from "../App";
import Answers from "./Answers";
import Button from "./Button";

const Summary = ({ value, answers = [{}] }) => {
  const [start, setStart] = useState(false);

  let sum = (value / answers.length) * 100;
  let passed = sum >= 80;

  console.log("Selected in child", answers);

  return (
    <>
      {!start ? (
        <div>
          {passed ? (
            <>
              <h1 style={{ color: "green" }}>Gratulacje! Quiz zaliczony!</h1>
            </>
          ) : (
            <>
              <h1 style={{ color: "red" }}>Niestety, quiz niezaliczony</h1>
            </>
          )}

          <p>
            Twój wynik to:{" "}
            <span style={{ color: passed ? "green" : "red" }}>{sum}%</span>(
            {value}z {answers.length} poprawnych odpowiedzi)
          </p>
          <Answers value={answers} />
          <Button
            value="Powrót do startu"
            onClick={() => setStart(true)}
          ></Button>
        </div>
      ) : (
        <>
          <App />
        </>
      )}
    </>
  );
};

export default Summary;
