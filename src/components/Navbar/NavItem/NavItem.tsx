import Link from "next/link";
import Styles from "./NavItem.module.css";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <li className={Styles.navbar__link}>
      <Link href={href}>{label}</Link>
    </li>
  );
}
