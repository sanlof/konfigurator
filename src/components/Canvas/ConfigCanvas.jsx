import Spline from "@splinetool/react-spline";
import styles from "./Canvas.module.css";
import { useState, useEffect } from "react";

export default function ConfigCanvas({ config }) {
  const [splineApp, setSplineApp] = useState(null);

  function onLoad(spline) {
    setSplineApp(spline);

    const ghost = spline.findObjectByName("Ghost");
    if (ghost) {
      ghost.visible = !!config.spooky;
    }
  }
  useEffect(() => {
    if (splineApp) {
      const ghost = splineApp.findObjectByName("Ghost");
      if (ghost) {
        ghost.visible = !!config.spooky;
      }
    }
  }, [config.spooky, splineApp]);
  return (
    <section className={styles.canvas}>
      <p>Color: {config.color || "Not selected"}</p>
      {config.spooky ? <p>Spooky ON</p> : <p>Spooky OFF</p>}
      <Spline
        scene="https://prod.spline.design/IkEvV-dRyFh-2xlT/scene.splinecode"
        onLoad={onLoad}
      />
    </section>
  );
}
