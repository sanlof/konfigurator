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

  if (variant === "color") classNames.push(styles.color);
  if (variant === "cart") classNames.push(styles.cart);
  if (variant === "favorite") classNames.push(styles.favorite);
  if (isFavorite) classNames.push(styles.active);

  return (
    <button className={classNames.join(" ")} onClick={handleClick}>
      {variant === "favorite" ? (
        <span>
          {isFavorite ? (
            <img
              src="/icons/mdi-light_heart-bold.png"
              alt="Marked as favorite"
              width="40"
              height="40"
            />
          ) : (
            <img
              src="/icons/mdi-light_heart.png"
              alt="Not marked as favorite"
              width="40"
              height="40"
            />
          )}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
