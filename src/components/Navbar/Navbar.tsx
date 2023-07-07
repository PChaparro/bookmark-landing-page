"use client";
import Image from "next/image";
import Styles from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";
import Button from "../Button/Button";
import { useState } from "react";

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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={Styles.navbar__container}>
      {/* Only show the dark logo if the mobile navigation is closed */}
      {!isMenuOpen && (
        <Image
          src="/images/logo-bookmark.svg"
          alt="Bookmark logo"
          width={148}
          height={25}
        />
      )}

      <div
        className={`${Styles["navbar__mobile-wrapper"]} ${
          !!isMenuOpen && Styles["navbar__mobile-wrapper--active"]
        }`}
      >
        {/* Mobile navigation header */}
        <div className={Styles["navbar__mobile-header"]}>
          <Image
            src="/images/logo-bookmark-light.svg"
            alt="Bookmark logo"
            className={Styles["navbar__logo--light"]}
            width={148}
            height={25}
          />
          <button className={Styles["navbar__toggle-icon"]}>
            <Image
              src="/icons/icon-close.svg"
              alt="Close menu icon"
              width={18}
              height={18}
              onClick={handleToggleMenu}
            />
          </button>
        </div>

        {/* Shared navigation links */}
        <ul className={Styles.navbar__links}>
          {NavItems.map((item, index) => (
            <NavItem
              key={`navitem-${index}`}
              {...item}
              clickCallback={handleToggleMenu}
            />
          ))}
        </ul>
        <Button type="anchor" style="secondary" label="Login" />

        {/* Social media icons*/}
        <div className={Styles.navbar__socials}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.navbar__social}
          >
            <Image
              src="/icons/icon-facebook.svg"
              alt="Facebook icon"
              width={24}
              height={24}
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.navbar__social}
          >
            <Image
              src="/icons/icon-twitter.svg"
              alt="Twitter icon"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>

      {/* Show the hamburger icon is the mobile menu is hidden */}
      {!isMenuOpen && (
        <button className={Styles["navbar__toggle-icon"]}>
          <Image
            src="/icons/icon-hamburger.svg"
            alt="Hamburger menu icon"
            width={24}
            height={18}
            onClick={handleToggleMenu}
          />
        </button>
      )}
    </nav>
  );
}
