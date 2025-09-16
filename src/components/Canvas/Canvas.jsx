import styles from "./Canvas.module.css";

export default function Canvas({ config }) {
  return (
    <section className={styles.canvas}>
      Product Image Goes Here
      <br />
      {config.spooky ? <p>Spooky ON</p> : <p>Spooky OFF</p>}
    </section>
  );
}
