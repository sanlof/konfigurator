import styles from "./ConfigChoices.module.css";
import GhostButton from "../Buttons/GhostButton";
import Button from "../Buttons/Button";

export default function ConfigChoices({ config, updateConfig }) {
  return (
    <section className={styles.configChoices}>
      <GhostButton
        value={config.spooky}
        onChange={(val) => updateConfig("spooky", val)}
      />
      <div>
        <Button>Color</Button>
        <Button variant="cart">Add to cart</Button>
        <Button variant="favorite" />
      </div>
    </section>
  );
}
