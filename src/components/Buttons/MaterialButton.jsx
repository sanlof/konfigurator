import React from "react";
import styles from "./MaterialButton.module.css";

const materials = ["gold", "black", "silver"];

const angles = {
  gold: 0,
  black: 130,
  silver: 225,
};

const MaterialButton = ({ material, setMaterial }) => {
  const rotation = angles[material] || 0;

  const handleClick = () => {
    const currentIndex = materials.indexOf(material);
    const nextIndex = (currentIndex + 1) % materials.length;
    setMaterial(materials[nextIndex]);
  };

  const handleLabelClick = (mat) => {
    setMaterial(mat);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.labelTop} onClick={() => handleLabelClick("gold")}>
        Gold
      </div>
      <div
        className={styles.labelLeft}
        onClick={() => handleLabelClick("silver")}
      >
        Silver
      </div>
      <div
        className={styles.labelRight}
        onClick={() => handleLabelClick("black")}
      >
        Black
      </div>

      <button onClick={handleClick} className={styles.button} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <circle cx="28" cy="28" r="27.5" fill="#F5F3F0" stroke="black" />
          <line
            x1="28"
            y1="0.5"
            x2="28"
            y2="8"
            stroke="black"
            strokeWidth="2"
            transform={`rotate(${rotation} 28 28)`}
          />
        </svg>
      </button>
    </div>
  );
};

export default MaterialButton;
