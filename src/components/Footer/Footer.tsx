import Image from "next/image";
import Container from "../Container/Container";
import Styles from "./Footer.module.css";
import Button from "../Button/Button";

const NavItems = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#",
    label: "Pricing",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Socials = [
  {
    href: "#",
    image: "/icons/icon-facebook.svg",
  },
  {
    href: "#",
    image: "/icons/icon-twitter.svg",
  },
];

export default function Footer() {
  return (
    <footer className={Styles.footer__background}>
      <Container size="large">
        <div className={Styles.footer}>
          <div className={Styles.footer__links}>
            <Image
              src="/images/logo-bookmark-light-text.svg"
              alt="Bookmark logo"
              width={148}
              height={25}
            />
            <ul className={Styles["footer__nav-items"]}>
              {NavItems.map((item) => (
                <li
                  key={`footer-navitem-${item.label}`}
                  className={Styles["footer__nav-item"]}
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <ul className={Styles.footer__socials}>
            {Socials.map((item) => (
              <li key={`footer-social-${item.href}`}>
                <a href={item.href} rel="noopener noreferrer" target="_blank">
                  <Image
                    src={item.image}
                    alt="Social icon"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
