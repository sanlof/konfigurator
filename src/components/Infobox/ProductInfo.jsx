import styles from "./ProductInfo.module.css";

export default function ProductInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.headingBox}>
        <h2 className={styles.heading}>LAMP 02</h2>
        <p className={styles.price}>499 SEK</p>
      </div>
      <div className={styles.descriptionBox}>
        <h3 className={styles.subheading}>Description</h3>
        <p className={styles.description}>
          The Lava Lamp Model 02 brings a modern twist to a classic design.
          Featuring a sleek aluminum base and cap, this version enhances any
          room with its vibrant, slow-moving wax formations suspended in a
          colorful liquid. With improved heating efficiency and a quicker
          warm-up time, Model 02 provides a mesmerizing glow in under 30
          minutes. Perfect for desks, bedrooms, or chill-out spaces, it combines
          retro charm with updated reliability—an eye-catching piece that adds
          warmth and personality to any setting.
        </p>
      </div>
    </div>
  );
}
