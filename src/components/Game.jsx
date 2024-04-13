import styles from "./Game.module.css";
import { questions } from "../data/questions";
import { useState } from "react";

export default function Game({ setCurrentPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
    setSelectedOption(null);
  };

  let yellowColor = "#f9eccc";
  let redColor = "#ff9999";
  let greenColor = "#4daa57";

  return (
    <>
      <div className={styles.container}>
        <h2>GAME </h2>
        {currentIndex + 1} / {questions.length} <br />
        {questions[currentIndex].q}
        <br />
        <div
          className={styles.answerBox}
          style={{
            backgroundColor: `${
              selectedOption != 0
                ? yellowColor
                : 0 != questions[currentIndex].correctAnswer
                ? redColor
                : greenColor
            }`,
          }}
        >
          <input
            id=""
            type="radio"
            name="answers"
            value="answerA"
            onChange={() => {
              if (selectedOption == null) {
                setSelectedOption(0);
              }
            }}
            checked={selectedOption === 0}
          />
          <p>A: {questions[currentIndex].answer[0]}</p>
        </div>
        <div
          className={styles.answerBox}
          style={{
            backgroundColor: `${
              selectedOption != 1
                ? yellowColor
                : 1 != questions[currentIndex].correctAnswer
                ? redColor
                : greenColor
            }`,
          }}
        >
          <input
            id=""
            type="radio"
            name="answers"
            value="answerB"
            checked={selectedOption === 1}
            onChange={() => {
              if (selectedOption == null) {
                setSelectedOption(1);
              }
            }}
          />
          <p>B: {questions[currentIndex].answer[1]}</p>
        </div>
        <div
          className={styles.answerBox}
          style={{
            backgroundColor: `${
              selectedOption != 2
                ? yellowColor
                : 2 != questions[currentIndex].correctAnswer
                ? redColor
                : greenColor
            }`,
          }}
        >
          <input
            id=""
            type="radio"
            name="answers"
            value="answerC"
            checked={selectedOption === 2}
            onChange={() => {
              if (selectedOption == null) {
                setSelectedOption(2);
              }
            }}
          />
          <p>C: {questions[currentIndex].answer[2]}</p>
        </div>
        <div
          className={styles.answerBox}
          style={{
            backgroundColor: `${
              selectedOption != 3
                ? yellowColor
                : 3 != questions[currentIndex].correctAnswer
                ? redColor
                : greenColor
            }`,
          }}
        >
          <input
            id=""
            type="radio"
            name="answers"
            value="answerD"
            checked={selectedOption === 3}
            onChange={() => {
              if (selectedOption == null) {
                setSelectedOption(3);
              }
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
