import styles from "./DetailsAds.module.css";

export default function DetailsAds({ setCurrentPage }) {
  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: "white", border: "solid 5px var(--green2)" }}
      >
        <p className={styles.heading}>Details of ads</p>

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
