import styles from "./ResultPage.module.css";

export default function ResultPage({ setCurrentPage }) {
  return (
    <>
      <div className={styles.container}>
        <h2>RESULT</h2>
        Congratulations! 🧬 Excellent result!
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
