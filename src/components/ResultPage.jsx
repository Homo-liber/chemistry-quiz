import styles from "./ResultPage.module.css";

export default function ResultPage({ setCurrentPage }) {
  return (
    <>
      <div className={styles.container}>
        <h2>RESULT</h2>
        Congratulations User! 🧬 Excellent result!
        <div className={styles.yellowBox}>
          <p>You answered</p>
          <p>13 out of 15</p>
          <p>questions correctly</p>
          <p>Great result!</p>
          <p>🎉 🥳</p>
        </div>
        <button
          className={styles.resultbutton}
          onClick={() => {
            setCurrentPage("game");
          }}
        >
          NEW GAME
        </button>
      </div>
    </>
  );
}
