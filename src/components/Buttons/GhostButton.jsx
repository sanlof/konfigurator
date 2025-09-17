import styles from "./GhostButton.module.css";
import { useState } from "react";

export default function GhostButton({ value, onChange }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onChange(!value); // using value instead of isClicked-state, so it takes the value from onChange via props instead
  };

  return (
    <section className={styles.Spooky}>
      <button
        className={`${styles.GhostButton} ${value ? styles.on : styles.off}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        type="button"
      >
        {value ? (
          <img src="/icons/solar_ghost-bold.png" alt="Ghost icon filled" />
        ) : (
          <img src="/icons/solar_ghost-linear.png" alt="Ghost icon outline" />
        )}
        {isHovered ? (value ? "Off" : "On") : value ? "On" : "Off"}
      </button>
      <article className={styles.addPrice}>+150 SEK</article>
    </section>
  );
}
