import styles from "./ConfigChoices.module.css";
import GhostButton from "../Buttons/GhostButton";
import Button from "../Buttons/Button";
import MaterialButton from "../Buttons/MaterialButton";

export default function ConfigChoices({ config, updateConfig }) {
  const currentColor = config.color || "orange"; // orange is default

  return (
    <form className={styles.configChoices}>
      <fieldset className={`${styles.fieldset} ${styles.colorFieldset}`}>
        <legend className={styles.legend}>Color</legend>
        <Button
          variant="color"
          isActive={currentColor === "orange"}
          onClick={() => updateConfig("color", "orange")}
        >
          Orange
        </Button>
        <Button
          variant="color"
          isActive={currentColor === "blue"}
          onClick={() => updateConfig("color", "blue")}
        >
          Blue
        </Button>
      </fieldset>
      <fieldset className={styles.spookyFieldset}>
        <legend className={styles.legend}>Spooky?</legend>
        <GhostButton
          value={config.spooky}
          onChange={(val) => updateConfig("spooky", val)}
        />
      </fieldset>
      <fieldset className={`${styles.fieldset} ${styles.materialFieldset}`}>
        <legend className={styles.legend}>Material</legend>
        <MaterialButton
          material={config.material}
          setMaterial={(mat) => updateConfig("material", mat)}
        />
      </fieldset>
      <fieldset className={`${styles.fieldset}`}>
        <Button variant="cart">Add to cart</Button>
        <Button variant="favorite" />
      </fieldset>
    </form>
  );
}
