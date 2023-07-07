import Container from "../Container/Container";
import BrowserCard from "./BrowserCard/BrowserCard";
import Styles from "./Extension.module.css";

const browsers = [
  {
    name: "Chrome",
    logo: "/images/logo-chrome.svg",
    minVersion: 62,
    link: "https://www.google.com/chrome/",
  },
  {
    name: "Firefox",
    logo: "/images/logo-firefox.svg",
    minVersion: 55,
    link: "https://www.mozilla.org/en-US/firefox/new/",
  },
  {
    name: "Opera",
    logo: "/images/logo-opera.svg",
    minVersion: 46,
    link: "https://www.opera.com/",
  },
];

export default function Extension() {
  return (
    <section className="section">
      <Container size="medium">
        <h2 className="subtitle text--centered">Download the extension</h2>
        <p className="paragraph text--centered">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </Container>
      <Container size="large">
        <div className={Styles.extensions}>
          {browsers.map((browser, index) => (
            <BrowserCard
              {...browser}
              index={index}
              key={`extension-card-${index}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
