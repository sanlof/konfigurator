import styles from "./Infobox.module.css";
import ProductInfo from "./ProductInfo";

export default function Infobox() {
  return (
    <section className={styles.infobox}>
      <ProductInfo />
    </section>
  );
}
