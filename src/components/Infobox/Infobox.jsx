import styles from "./Infobox.module.css";
import ProductInfo from "./ProductInfo";
import ConfigChoices from "./ConfigChoices";

export default function Infobox({ config, updateConfig }) {
  return (
    <section className={styles.infobox}>
      <ProductInfo config={config} />
      <ConfigChoices config={config} updateConfig={updateConfig} />
    </section>
  );
}
