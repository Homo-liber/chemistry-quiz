import styles from "./Game.module.css";
import { questions } from "../../data/questions";
import { useState } from "react";

export default function Game({
  setCurrentPage,
  loggedInUser,
  handleIncrement,
}) {
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
      <div className={styles.userNameContainer}>
        <div className={styles.nameOfUser}>{loggedInUser}</div>
      </div>
      <div className={styles.heading}>GAME</div>

      <p className={styles.text}>
        {currentIndex + 1} / {questions.length}
      </p>
      <p className={styles.text}>{questions[currentIndex].q}</p>

      <div className={styles.boxAB}>
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
      </div>

      <div className={styles.boxCD}>
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
      </div>

      <button
        className={styles.nextbutton}
        disabled={selectedOption === null}
        onClick={() => {
          if (selectedOption == questions[currentIndex].correctAnswer) {
            handleIncrement();
          }
          if (currentIndex < questions.length - 1) {
            handleClick();
          } else {
            setCurrentPage("ads");
          }
        }}
      >
        NEXT
      </button>
    </>
  );
}
