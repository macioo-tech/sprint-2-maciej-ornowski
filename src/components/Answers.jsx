const Answers = ({ value = [{}] }) => {
  console.log("Selected in child-child", value);

  const handleClick = () => {
    //setRestart((prev) => !prev);
  };

  return (
    <>
      {value.map((el, i) => (
        <div key={i}>
          <p style={{ color: "lightblue" }}>
            Pytanie {i + 1}: {el.question}
          </p>
          <p>
            Twoja odpowiedź:{" "}
            <span style={{ color: el.isCorrect ? "green" : "red" }}>
              {el.answer}
            </span>
          </p>
        </div>
      ))}
    </>
  );
};

export default Answers;
