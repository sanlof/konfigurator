import Spline from "@splinetool/react-spline";
import styles from "./Canvas.module.css";
import { useState, useEffect } from "react";

export default function ConfigCanvas({ config }) {
  const [splineApp, setSplineApp] = useState(null);

  function onLoad(spline) {
    setSplineApp(spline);
  }

  // update main and lava color
  useEffect(() => {
    if (splineApp) {
      const main = splineApp.findObjectByName("main");
      const lava = splineApp.findObjectByName("Lava");
      const currentColor = config.color;
      if (main) main.color = getColor(currentColor);
      if (lava) lava.color = getColor(currentColor);
    }
  }, [config.color, splineApp]);

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

  // update ghost color
  useEffect(() => {
    if (splineApp) {
      const ghost = splineApp.findObjectByName("Ghost");
      if (ghost && ghost.type === "Mesh") {
        ghost.color = getColorForGhost(config.color);
      }
    }
  }, [splineApp, config.color]);

  // update backdrop and pointlight colors
  useEffect(() => {
    if (splineApp) {
      const backdrop = splineApp.findObjectByName("Backdrop");
      const pointlight = splineApp.findObjectByName("PointLight");
      const currentColor = config.color;

      if (backdrop && backdrop.type === "Mesh") {
        backdrop.color = getColorForBackdrop(currentColor);
      }

      if (pointlight) {
        pointlight.color = getColorForLight(currentColor);
      }
    }
  }, [splineApp, config.color]);

  // main hexcodes
  function getColor(color) {
    switch (color) {
      case "orange":
        return "#FF7D3D";
      case "blue":
        return "#3F3FE9";
      default:
        return "#FF7D3D";
    }
  }

  //ghost hexcodes
  function getColorForGhost(color) {
    switch (color) {
      case "orange":
        return "#F1D4B0"; // valfri hex för orange
      case "blue":
        return "#B8B0F1"; // valfri hex för blue
      default:
        return "#F1D4B0"; // fallback
    }
  }

  // background hexcodes
  function getColorForBackdrop(color) {
    switch (color) {
      case "orange":
        return "#57C8EA";
      case "blue":
        return "#6362F6";
      default:
        return "#57C8EA";
    }
  }

  // pointlight hexcodes
  function getColorForLight(color) {
    switch (color) {
      case "orange":
        return "#FF982A";
      case "blue":
        return "#3F3FE9";
      default:
        return "#FF982A";
    }
  }

  // material hexcodes
  function getColorFromMaterial(material) {
    switch (material) {
      case "silver":
        return "#878787";
      case "gold":
        return "#A79763";
      case "black":
        return "#353535";
      default:
        return "#878787";
    }
  }

  return (
    <section className={styles.canvas}>
      <Spline
        scene="https://prod.spline.design/jYOB5fDkobkOv9U0/scene.splinecode"
        onLoad={onLoad}
      />
    </section>
  );
}
