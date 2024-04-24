import styles from "./ResultPage.module.css";

export default function ResultPage({ setCurrentPage, loggedInUser }) {
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
        <p className={styles.text}>13 out of 15</p>
        <p className={styles.text}>questions correctly</p>
        <p className={styles.text}>Great result!</p>
        <p className={styles.emoji1}>🎉 🥳</p>
      </div>
      <button
        className={styles.resultbutton}
        onClick={() => {
          setCurrentPage("welcome");
        }}
      >
        NEW GAME
      </button>
    </>
  );
}
