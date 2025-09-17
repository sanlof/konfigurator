import { useState } from "react";
import styles from "./Button.module.css";

export default function Button({ children, variant = "default", onClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleClick() {
    if (variant === "favorite") {
      setIsFavorite(!isFavorite); // toggle active state only for favorite variant
    }
    if (onClick) onClick();
  }

  let classNames = [styles.button];

  if (variant === "cart") classNames.push(styles.cart);
  if (variant === "favorite") classNames.push(styles.favorite);
  if (isActive) classNames.push(styles.active);

  return (
    <button className={classNames.join(" ")} onClick={handleClick}>
      {variant === "favorite" ? (
        <span>{isActive ? "❤️" : "🤍"}</span> // Change to the icons
      ) : (
        children
      )}
    </button>
  );
}
