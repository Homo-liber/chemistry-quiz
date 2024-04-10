import styles from "./Ads.module.css";
import adsPhoto from "../../src/assets/ads.jpg";

export default function Ads({ setCurrentPage }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Advertisement</h2>
        <img src={adsPhoto} alt="adsImage" className={styles.adsImage} />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sint
        nulla rem est totam illo veniam quam error! Eius, aspernatur.
        <button
          className={styles.adsbutton}
          onClick={() => {
            setCurrentPage("details");
          }}
        >
          More about promotion
        </button>
        <button
          className={styles.adsbutton}
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
