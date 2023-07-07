import Link from "next/link";
import Styles from "./NavItem.module.css";

interface NavItemProps {
  href: string;
  label: string;
  clickCallback: () => void;
}

export default function NavItem({ href, label, clickCallback }: NavItemProps) {
  return (
    <li className={Styles.navbar__link} onClick={clickCallback}>
      <Link href={href}>{label}</Link>
    </li>
  );
}
