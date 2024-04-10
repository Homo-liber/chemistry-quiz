import styles from "./DetailsAds.module.css";

export default function DetailsAds() {
  return (
    <>
      <div className={styles.container}>
        <h2>Details of advertisement</h2>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ea eaque at deserunt reprehenderit officiis illum dolorem inventore
          nisi eveniet amet enim possimus, perferendis doloribus tempora
          mollitia distinctio voluptatem rem? <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ea eaque at deserunt reprehenderit officiis illum dolorem inventore
          nisi eveniet amet enim possimus, perferendis doloribus tempora
          mollitia distinctio voluptatem
        </p>

        <a
          className={styles.detailsLink}
          href="https://www.deutsches-chemie-museum.de/"
        >
          https://www.deutsches-chemie-museum.de/
        </a>
      </div>
    </>
  );
}
