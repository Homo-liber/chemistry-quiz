import styles from "./WelcomePage.module.css";
import startPic from "../../assets/startpic.jpg";
import { useState } from "react";

export default function WelcomePage({ setCurrentPage }) {
  const [username, setUsername] = useState("");

  function myFunction() {
    if (username == "") {
      return "Username";
    } else {
      return username;
    }
  }
  let newName = myFunction();

  return (
    <>
      <div className={styles.userNameContainer}>
        <div className={styles.nameOfUser}>{newName}</div>
      </div>

      <div className={styles.heading}>Welcome! </div>
      <img src={startPic} className={styles.picture} alt="start image" />
      <div className={styles.formBox}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(username);
          }}
        >
          <div className={styles.labelInputBox}>
            <label htmlFor="user-name" className={styles.labelForm}>
              Enter your name:
            </label>
            <input
              value={username}
              onChange={(text) => {
                setUsername(text.target.value);
              }}
              id="user-name"
              type="text"
              className={styles.inputForm}
            />
          </div>
          <button className={styles.loginButton}>LOGIN</button>
        </form>
      </div>
      <button
        className={styles.welcomebutton}
        onClick={() => {
          setCurrentPage("game");
        }}
      >
        START
      </button>
    </>
  );
}
