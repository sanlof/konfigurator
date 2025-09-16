import styles from "./ProductPage.module.css";
import Canvas from "./Canvas/Canvas";
import Infobox from "./Infobox/Infobox";

export default function ProductPage() {
  return (
    <main>
      <nav className={styles.sitemap}>
        Products / Lamps / <strong>Lamp 02</strong>
      </nav>
      <section className={styles.product}>
        <Canvas />
        <Infobox />
      </section>
    </main>
  );
}
