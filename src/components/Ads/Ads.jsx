import styles from "./Ads.module.css";
import adsPhoto from "../../assets/ads.jpg";

export default function Ads({ setCurrentPage, loggedInUser }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerTransparent}>
        <div className={styles.userNameContainer}>
          <div className={styles.nameOfUser}>{loggedInUser}</div>
        </div>

        <p className={styles.heading}>Advertisement</p>

        <img src={adsPhoto} alt="adsImage" className={styles.adsImage} />

        <div className={styles.adsButtonsBox}>
          <button
            className={styles.adsButton}
            onClick={() => {
              setCurrentPage("details");
            }}
          >
            About promotion
          </button>
          <button
            className={styles.adsButton}
            onClick={() => {
              setCurrentPage("result");
            }}
          >
            See result
          </button>
        </div>
      </div>
    </div>
  );
}
