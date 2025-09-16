import React, { useState, useEffect } from "react";
import styles from "./MaterialButton.module.css";

const MaterialButton = () => {
  const materials = ["gold", "black", "silver"];

  const [index, setIndex] = useState(0);

  const angles = {
    gold: 0,
    black: 130,
    silver: 225,
  };

  const currentMaterial = materials[index];
  const rotation = angles[currentMaterial];

  // Save current material
  const handleClick = () => {
    setIndex((prev) => (prev + 1) % materials.length);
  };

  const handleLabelClick = (material) => {
    const newIndex = materials.indexOf(material);
    setIndex(newIndex);
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

      <button onClick={handleClick} className={styles.button}>
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
