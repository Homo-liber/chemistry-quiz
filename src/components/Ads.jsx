import styles from "./Ads.module.css";
import { questions } from "../assets/data/questions.js";

export default function Ads({ setCurrentPage }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Advertisement</h2>
        <h2>50% Rabbat!</h2>
        Studying science is fun! Subscribe to our YouTube channel and be the
        first to know about discoveries in the world of science!
        <button
          className={styles.adsbutton}
          onClick={() => {
            setCurrentPage("result");
          }}
        >
          RESULT
        </button>
      </div>
    </>
  );
}
