import Container from "../Container/Container";
import Styles from "./Features.module.css";
import FeaturesSlider from "./FeaturesSlider/FeaturesSlider";

export default function Features() {
  return (
    <section className="section">
      <Container size="medium">
        <h2 className="subtitle text--centered">Features</h2>
        <p className="paragraph text--centered">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </Container>
      <FeaturesSlider />
    </section>
  );
}
