import styles from "./ResultPage.module.css";
import { questions } from "../../data/questions";

export default function ResultPage({
  setCurrentPage,
  loggedInUser,
  correctly,
  setCorrectly,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.containerTransparent}>
        <div className={styles.userNameContainer}>
          <div className={styles.nameOfUser}>{loggedInUser}</div>
        </div>

        <p className={styles.heading}>RESULT</p>

        <div className={styles.greetingsBox}>
				<p className={styles.text} style={{ marginTop: 10 }}>
          
					
					{correctly < 3 ? (loggedInUser + ", you don't seem to be interested in biology at all. 🧬 Start now, you won't regret it! :)") :
				   (3 <= correctly) && (correctly < 5) ? ("Hey, " + loggedInUser + ". 🧬 Your knowledge is still pretty weak, keep learning!") :
					 (5 <= correctly) && (correctly < 8) ? ("Not bad, " + loggedInUser + ". 🧬 I can see you did your best!") :
					 (8 <= correctly) && (correctly <= 10) ? ("Congratulations " + loggedInUser + "! 🧬 Your knowledge is really at a high level! ") :
					 ("Ups..! Some error is here")}
					
        </p>
				</div>

        <div className={styles.yellowBox}>
          <p className={styles.text}>You answered</p>
          <p className={styles.text}>
            {correctly} out of {questions.length}
          </p>
          <p className={styles.text}>questions correctly</p>


          <p className={styles.emoji1}>
							{ correctly < 3 ? ("😐 😯") :
							(3 <= correctly) && (correctly < 5) ? ("🆗 🙄") :
							(5 <= correctly) && (correctly < 8) ? ("✅ 😊") :
							(8 <= correctly) && (correctly <= 10) ? ("🎯 🎉 🥳") :
							("Ups..! Some error is here")
							}
					</p>
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
      </div>
    </div>
  );
}
