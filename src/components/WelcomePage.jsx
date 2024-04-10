import styles from "./WelcomePage.module.css";
import startPic from "../../src/assets/startpic.jpg";

export default function WelcomePage({ setCurrentPage }) {
  return (
    <div className={styles.container}>
      <div className={styles.userNameContainer}>
        <div className={styles.nameOfUser}>Svitlana</div>
      </div>
      <div className={styles.greetings}>Welcome!</div>
      <img src={startPic} className={styles.picture} alt="start image" />
      <form action="">
        <div>
          <label htmlFor="user-name" className={styles.labelForm}>
            Enter your name:
          </label>
          <input
            id="name"
            placeholder="Name"
            type="text"
            className={styles.inputForm}
          />
          <button className={styles.loginButton} type="submit">
            Login
          </button>
        </div>
      </form>

      <button
        className={styles.welcomebutton}
        onClick={() => {
          setCurrentPage("game");
        }}
      >
        START
      </button>
    </div>
  );
}
