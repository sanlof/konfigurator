import { useState } from "react";
import styles from "./ProductInfo.module.css";

export default function ProductInfo({ config }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };
  return (
    <div className={styles.container}>
      <div className={styles.headingBox}>
        <h2 className={styles.heading}>LAMP 02</h2>
        <p className={styles.price}>{config.spooky ? 1750 : 1600} SEK</p>
      </div>
      <div className={styles.descriptionBox}>
        <h3 className={styles.subheading} onClick={toggleDescription}>
          Description
          <span
            className={`${styles.arrow} ${
              isDescriptionOpen ? styles.arrowOpen : ""
            }`}
          >
            <img src="/icons/chevron-up.svg" alt="Arrow icon" />
          </span>
        </h3>
        {isDescriptionOpen && (
          <p className={styles.description}>
            Experience the hypnotic charm of a modern lava lamp. With a sleek
            aluminum base, quick warm-up, and smooth flow, it’s a true statement
            piece. Activate the exclusive Spooky mode to transform any room into
            a mysterious retreat.
          </p>
        )}
      </div>
    </div>
  );
}
