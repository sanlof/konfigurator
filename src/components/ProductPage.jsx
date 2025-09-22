import styles from "./ProductPage.module.css";
import ConfigCanvas from "./Canvas/ConfigCanvas";
import Infobox from "./Infobox/Infobox";
import Gallery from "./Gallery/Gallery";
import { useState } from "react";

export default function ProductPage() {
  const [config, setConfig] = useState({
    // default lamp settings
    spooky: false, // set to "off" by default
    color: null, //should be a color by default?
    material: "silver",
  });

  const updateConfig = (key, value) => {
    // update lamp settings when user clicks something
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <main>
      <nav className={styles.sitemap}>
        Products / Lamps / <strong>Lamp 02</strong>
      </nav>
      <section>
        <div className={styles.product}>
          <ConfigCanvas config={config} />
          <Infobox config={config} updateConfig={updateConfig} />
        </div>
        <Gallery config={config} />
      </section>
    </main>
  );
}
