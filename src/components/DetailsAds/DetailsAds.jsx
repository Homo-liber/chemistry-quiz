import styles from "./DetailsAds.module.css";

export default function DetailsAds({ setCurrentPage, loggedInUser }) {
  return (
    <div className={styles.containerTransparent}>
      <div className={styles.whiteBox}>
        <div className={styles.userNameContainer}>
          <div className={styles.nameOfUser}>{loggedInUser}</div>
        </div>

        <div className={styles.heading}>Details</div>

        <p className={styles.text} style={{ textAlign: "justify" }}>
          Chemistry serves as the basis for prosperity in a modern society and
          provides the prerequisites for the necessary recycling economy. This
          is the message the museum wants to convey. With a collection of
          historically valuable original systems, machines and apparatus from
          the chemical industry from the region, it is unique in Europe. Over
          300 exhibits are currently on display in the outdoor area of the
          technology park and provide an insight into high-pressure technology
          as well as plastics and electrochemistry. The individual exhibits are
          grouped together in exhibition complexes. These include the ammonia
          synthesis chamber from the early years of this process, a historical
          chemical train as well as a distillation plant and much more.
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
    </div>
  );
}
