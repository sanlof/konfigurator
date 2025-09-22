import Spline from "@splinetool/react-spline";
import styles from "./Canvas.module.css";
import { useState, useEffect } from "react";

export default function ConfigCanvas({ config }) {
  const [splineApp, setSplineApp] = useState(null);

  function onLoad(spline) {
    setSplineApp(spline);

    const ghost = spline.findObjectByName("Ghost");
    const cooler = spline.findObjectByName("cooler");
    const base = spline.findObjectByName("base");

    // const backdrop = spline.findObjectByName("Backdrop");

    // if (backdrop) {
    //   console.log("backdrop found");
    //   if (backdrop.type === "Mesh") {
    //     console.log("backdrop has mesh");
    //     backdrop.color = "#ff0000";
    //   }
    // }

    if (cooler && base) {
      console.log("cooler & base found");
      if (cooler.type === "Mesh" && base.type === "Mesh") {
        const color = getColorFromMaterial(config.material);
        cooler.color = color;
        base.color = color;
        console.log(`Färg ändrad till ${color}!`);
      }
    }

    if (ghost) {
      ghost.visible = !!config.spooky;
    }
  }

  // update material choice
  useEffect(() => {
    if (splineApp) {
      const cooler = splineApp.findObjectByName("cooler");
      const base = splineApp.findObjectByName("base");
      if (cooler && base) {
        const color = getColorFromMaterial(config.material);
        cooler.color = color;
        base.color = color;
      }
    }
  }, [config.material, splineApp]);

  // update ghost visibility
  useEffect(() => {
    if (splineApp) {
      const ghost = splineApp.findObjectByName("Ghost");
      if (ghost) {
        ghost.visible = !!config.spooky;
      }
    }
  }, [config.spooky, splineApp]);

  // material hexcodes
  function getColorFromMaterial(material) {
    switch (material) {
      case "silver":
        return "#878787";
      case "gold":
        return "#A79763";
      case "black":
        return "#353535";
    }
  }

  // Dynamisk URL baserat på config.color
  function getSceneUrl(color) {
    const colorMap = {
      blue: "https://prod.spline.design/IkEvV-dRyFh-2xlT/scene.splinecode",
      orange: "https://prod.spline.design/JTSsTAxxvly2nNHW/scene.splinecode",
    };
    return colorMap[color] || colorMap.orange; // orange is default
  }
  const sceneUrl = getSceneUrl(config.color);

  return (
    <section className={styles.canvas}>
      {/* <p>Color: {config.color || "Not selected"}</p>
      {/* <p>Material: {config.material || "Not selected"}</p>
      {config.spooky ? <p>Spooky ON</p> : <p>Spooky OFF</p>} */}
      <Spline scene={sceneUrl} onLoad={onLoad} />
    </section>
  );
}
