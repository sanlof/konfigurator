import styles from "./ConfigChoices.module.css";
import GhostButton from "../Buttons/GhostButton";

export default function ConfigChoices({ config, updateConfig }) {
  return (
    <section className={styles.configChoices}>
      <GhostButton
        value={config.spooky}
        onChange={(val) => updateConfig("spooky", val)}
      />
    </section>
  );
}
