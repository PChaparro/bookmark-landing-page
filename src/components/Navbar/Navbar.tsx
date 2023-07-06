import Image from "next/image";
import Styles from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";
import Button from "../Button/Button";

const NavItems = [
  {
    href: "#",
    label: "Features",
  },
  {
    href: "#",
    label: "Pricing",
  },
  {
    href: "#",
    label: "Contact",
  },
];

export default function Navbar() {
  return (
    <nav className={Styles.navbar__container}>
      <Image
        src="/images/logo-bookmark.svg"
        alt="Bookmark logo"
        className={Styles.logo}
        width={148}
        height={25}
      />
      <ul className={Styles.navbar__links}>
        {NavItems.map((item, index) => (
          <NavItem key={`navitem-${index}`} {...item} />
        ))}
        <Button type="anchor" style="secondary" label="Login" />
      </ul>
    </nav>
  );
}
