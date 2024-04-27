import styles from "./ResultPage.module.css";
import { questions } from "../../data/questions";

export default function ResultPage({
  setCurrentPage,
  loggedInUser,
  correctly,
  setCorrectly,
}) {
  return (
    <>
      <div className={styles.userNameContainer}>
        <div className={styles.nameOfUser}>{loggedInUser}</div>
      </div>

      <p className={styles.heading}>RESULT</p>

      <p className={styles.text} style={{ marginTop: 10 }}>
        Congratulations {loggedInUser}! 🧬 Excellent result!
      </p>
      <div className={styles.yellowBox}>
        <p className={styles.text}>You answered</p>
        <p className={styles.text}>
          {correctly} out of {questions.length}
        </p>
        <p className={styles.text}>questions correctly</p>
        <p className={styles.text}>Great result!</p>
        <p className={styles.emoji1}>🎉 🥳</p>
      </div>
      <button
        className={styles.resultbutton}
        onClick={() => {
          setCurrentPage("welcome");
          setCorrectly(0);
        }}
      >
        NEW GAME
      </button>
    </>
  );
}
