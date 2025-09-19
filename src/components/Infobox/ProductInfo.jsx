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
            Immerse yourself in the hypnotic beauty of our Lamp 02 lava lamp.
            This modern interpretation of the classic design features a premium
            aluminum base with customizable finishes and mesmerizing wax
            formations that dance through vibrant liquid. With enhanced heating
            technology, enjoy faster warm-up times and consistent performance.
            Choose your perfect color combination and add our exclusive "Spooky"
            mode for an eerie twist that transforms any space into a mysterious
            sanctuary. Perfect for creating ambient lighting in bedrooms,
            studios, or lounge areas.
          </p>
        )}
      </div>
    </div>
  );
}
