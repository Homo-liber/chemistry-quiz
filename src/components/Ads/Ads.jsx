import styles from "./Ads.module.css";
import adsPhoto from "../../assets/ads.jpg";

export default function Ads({ setCurrentPage }) {
  return (
    <>
      <div className={styles.userNameContainer}>
        <div className={styles.nameOfUser}></div>
      </div>

      <p className={styles.heading}>Advertisement</p>
      <img src={adsPhoto} alt="adsImage" className={styles.adsImage} />
      <p className={styles.text}>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sint
        nulla rem est totam illo veniam quam error! Eius, aspernatur.
      </p>
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
    </>
  );
}
