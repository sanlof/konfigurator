import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/logo.png" alt="Spooky Lights logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li>
          <a href="#">SHOP</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
      </ul>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">ACCOUNT</a>
        </li>
        <li>
          <a href="#">FAVORITES</a>
        </li>
        <li>
          <a href="#">CART</a>
        </li>
      </ul>
    </nav>
  );
}
