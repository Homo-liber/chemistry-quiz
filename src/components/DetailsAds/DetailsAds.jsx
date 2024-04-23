import styles from "./DetailsAds.module.css";

export default function DetailsAds({ setCurrentPage }) {
  return (
    <>
      <div className={styles.whiteBox}>
        <div className={styles.userNameContainer}>
          <div className={styles.nameOfUser}></div>
        </div>

        <div className={styles.heading}>Details of ads</div>

        <p className={styles.text} style={{ textAlign: "justify" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ea eaque at deserunt reprehenderit officiis illum dolorem inventore
          nisi eveniet amet enim possimus, perferendis doloribus tempora
          mollitia distinctio voluptatem rem? <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis ea eaque at deserunt reprehenderit perferendis doloribus
          tempora.
        </p>

        <a
          className={styles.text}
          style={{ color: "red" }}
          href="https://www.deutsches-chemie-museum.de/"
        >
          https://www.deutsches-chemie-museum.de/
        </a>

        <button
          className={styles.backbutton}
          onClick={() => {
            setCurrentPage("ads");
          }}
        >
          BACK
        </button>
      </div>
    </>
  );
}