import "./ProductPage.module.css";
import Canvas from "./Canvas/Canvas";
import Infobox from "./Infobox/Infobox";

export default function ProductPage() {
  return (
    <main>
      <nav className="sitemap">
        Products / Lamps / <strong>Lamp 02</strong>
      </nav>
      <Canvas />
      <Infobox />
    </main>
  );
}
