import Link from "next/link";
import Styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  style: "primary" | "secondary" | "white";
  type: "anchor" | "button";
  href?: string; // Type = anchor
  callback?: () => void; // Type = button
}

const buttonStyles = {
  primary: Styles["button--primary"],
  secondary: Styles["button--secondary"],
  white: Styles["button--white"],
};

export default function Button({ label, style, type, ...props }: ButtonProps) {
  return type === "anchor" ? (
    <Link
      href={props.href || "#"}
      className={`${Styles.button} ${buttonStyles[style]}`}
    >
      {label}
    </Link>
  ) : (
    <button
      onClick={props.callback}
      className={`${Styles.button} ${buttonStyles[style]}`}
    >
      {label}
    </button>
  );
}
