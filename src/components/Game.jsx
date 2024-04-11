import styles from "./Game.module.css";
import { questions } from "../data/questions";
import { useState } from "react";

export default function Game({ setCurrentPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const [colorA, setColorA] = useState("gold");
  const [colorB, setColorB] = useState("gold");
  const [colorC, setColorC] = useState("gold");
  const [colorD, setColorD] = useState("gold");

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
    setSelectedOption(null);
    setColorA("gold");
    setColorB("gold");
    setColorC("gold");
    setColorD("gold");
  };

  return (
    <>
      <div className={styles.container}>
        <h2>GAME </h2>
        <p>
          A:{colorA} B:{colorB} C:{colorC} D:{colorD}
        </p>
        {currentIndex + 1} / {questions.length} <br />
        {questions[currentIndex].q}
        <br />
        <div
          className={styles.answerBox}
          style={{ backgroundColor: `${colorA}` }}
        >
          <input
            id=""
            type="radio"
            name="answers"
            value="answerA"
            onChange={() => {
              setSelectedOption(0);
              selectedOption != questions[currentIndex].correctAnswer
                ? setColorA("red")
                : selectedOption === questions[currentIndex].correctAnswer
                ? setColorA("green")
                : setColorA("gold");
            }}
            checked={selectedOption === 0}
          />
          <p>A: {questions[currentIndex].answer[0]}</p>
        </div>
        <div
          className={styles.answerBox}
          style={{ backgroundColor: `${colorB}` }}
        >
          <input
            id=""
            type="radio"
            name="answers"
            value="answerB"
            checked={selectedOption === 1}
            onChange={() => {
              setSelectedOption(1);
              selectedOption != questions[currentIndex].correctAnswer
                ? setColorB("red")
                : selectedOption === questions[currentIndex].correctAnswer
                ? setColorB("green")
                : setColorB("gold");
            }}
          />
          <p>B: {questions[currentIndex].answer[1]}</p>
        </div>
        <div
          className={styles.answerBox}
          style={{ backgroundColor: `${colorC}` }}
        >
          <input
            id=""
            type="radio"
            name="answers"
            value="answerC"
            checked={selectedOption === 2}
            onChange={() => {
              setSelectedOption(2);
              selectedOption != questions[currentIndex].correctAnswer
                ? setColorC("red")
                : selectedOption === questions[currentIndex].correctAnswer
                ? setColorC("green")
                : setColorC("gold");
            }}
          />
          <p>C: {questions[currentIndex].answer[2]}</p>
        </div>
        <div
          className={styles.answerBox}
          style={{ backgroundColor: `${colorD}` }}
        >
          <input
            id=""
            type="radio"
            name="answers"
            value="answerD"
            checked={selectedOption === 3}
            onChange={() => {
              setSelectedOption(3);
              selectedOption != questions[currentIndex].correctAnswer
                ? setColorD("red")
                : selectedOption === questions[currentIndex].correctAnswer
                ? setColorD("green")
                : setColorD("gold");
            }}
          />
          <p>D: {questions[currentIndex].answer[3]}</p>
        </div>
        <button
          className={styles.nextbutton}
          disabled={selectedOption === null}
          onClick={() => {
            if (currentIndex < questions.length - 1) {
              handleClick();
            } else {
              setCurrentPage("ads");
            }
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
}

// style={{
//   backgroundColor:
//     selectedOption === null
//       ? undefined
//       : selectedOption != questions[currentIndex].correctAnswer
//       ? "#ff9999"
//       : "#4daa57",
// }}
