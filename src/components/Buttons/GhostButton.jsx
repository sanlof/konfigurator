import styles from "./GhostButton.module.css";
import { useState } from "react";

export default function GhostButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  return (
    <section className={styles.Spooky}>
      <h3>Spooky?</h3>
      <button
        className={`${styles.GhostButton} ${
          isClicked ? styles.on : styles.off
        }`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isClicked ? (
          <img src="/icons/solar_ghost-bold.png" alt="Ghost icon filled" />
        ) : (
          <img src="/icons/solar_ghost-linear.png" alt="Ghost icon outline" />
        )}
        {isHovered ? (isClicked ? "Off" : "On") : isClicked ? "On" : "Off"}
      </button>
      <article className={styles.addPrice}>+150 SEK</article>
    </section>
  );
}
