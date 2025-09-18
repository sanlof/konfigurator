import styles from "./Canvas.module.css";

export default function Canvas({ config }) {
  return (
    <section className={styles.canvas}>
      Product Image Goes Here
      <br />
      <p>Color: {config.color || "Not selected"}</p>
      {config.spooky ? <p>Spooky ON</p> : <p>Spooky OFF</p>}
    </section>
  );
}
