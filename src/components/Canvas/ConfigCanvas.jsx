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
        return "#3F3FE9";
    }
  }

  // ghost hexcodes
  function getColorForGhost(color) {
    switch (color) {
      case "orange":
        return "#F1D4B0";
      case "blue":
        return "#B8B0F1";
      default:
        return "#B8B0F1";
    }
  }

  // background hexcodes
  function getColorForBackground(color) {
    switch (color) {
      case "orange":
        return "#085160";
      case "blue":
        return "#282767";
      default:
        return "#282767";
    }
  }

  // backdrop hexcodes
  function getColorForBackdrop(color) {
    switch (color) {
      case "orange":
        return "#57C8EA";
      case "blue":
        return "#6362F6";
      default:
        return "#6362F6";
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
        return "#3F3FE9";
    }
  }

  // material hexcodes
  function getColorFromMaterial(material) {
    switch (material) {
      case "silver":
        return "#878787";
      case "black":
        return "#353535";
      case "gold":
        return "#A79763";
      default:
        return "#A79763";
    }
  }

  const backgroundColor = getColorForBackground(config.color);

  return (
    <section className={styles.canvas} style={{ backgroundColor }}>
      <Spline
        scene="https://prod.spline.design/jYOB5fDkobkOv9U0/scene.splinecode"
        onLoad={onLoad}
      />
    </section>
  );
}
