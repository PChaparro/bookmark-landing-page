import Image from "next/image";
import Button from "../Button/Button";
import Styles from "./Hero.module.css";
import Container from "../Container/Container";

export default function Hero() {
  return (
    <div className={Styles["hero-wrapper"]}>
      <Container>
        <section className={Styles.hero}>
          <div className={Styles.hero__texts}>
            <h1 className="title">A Simple Bookmark Manager</h1>
            <p className="paragraph">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className={Styles["hero__cta-container"]}>
              <Button type="anchor" style="primary" label="Get it on Chrome" />
              <Button type="anchor" style="white" label="Get it on Firefox" />
            </div>
          </div>
          <div className={Styles.hero__images}>
            <Image
              src={"/images/illustration-hero.svg"}
              className={Styles.hero__image}
              width={650}
              height={460}
              alt="Hero Image"
            />
            <div className={Styles.hero__shape} />
          </div>
        </section>
      </Container>
    </div>
  );
}
