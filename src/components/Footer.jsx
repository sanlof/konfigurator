import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <section>
        <h2>Contact/Business</h2>
        <a href="mailto:spooky@info.com">Spooky@Info.Com</a>
        <br />
        (+ 46) 123 466 723
      </section>
      <section>
        <h2>Socials</h2>
        <a href="">Instagram</a>
        <br />
        <a href="">Tumblr</a>
      </section>
      <section>
        <a href="">FAQ</a>
        <br />
        <a href="">Work</a>
        <br />
        <a href="">About</a>
      </section>
      <section>
        <h2>Location</h2>
        Lärdomsgatan 3<br />
        Gothenburg
      </section>
      <section>
        <h2>Newsletter</h2>
        Subscribe
      </section>
    </footer>
  );
}
