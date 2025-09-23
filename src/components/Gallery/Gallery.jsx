import styles from "./Gallery.module.css";

export default function Gallery({ config }) {
  // Function to determine image name based on config
  const getImageName = (color, material, spooky) => {
    const colorCode = color || "blue"; // default blue
    const materialCode = material || "gold"; // default gold

    return `lamp-${colorCode}-${materialCode}`;
  };

  // Example of how image files must be named for this to work:
  // lamp-orange-silver.png = full variant
  // lamp-blue-gold.ghost.png = ghost variant
  // lamp-orange-black.closeup.png = close-up variant

  const imageName = getImageName(config.color, config.material, config.spooky);

  return (
    <section className={styles.gallery}>
      <img
        className={styles.closeup}
        src={`/images/${imageName}.closeup.png`}
        alt={`Close-up of lamp in ${config.color} with ${config.material} material`}
      />
      <img
        className={styles.ghost}
        src={`/images/${imageName}.ghost.png`}
        alt={`Ghost of lamp in ${config.color} with ${config.material} material`}
      />
      <img
        className={styles.full}
        src={`/images/${imageName}.png`}
        alt={`Full view of lamp in ${config.color} with ${config.material} material`}
      />
    </section>
  );
}
