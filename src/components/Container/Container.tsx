import Styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  size: "large" | "medium";
}

export default function Container({ children, size }: ContainerProps) {
  return (
    <div
      className={`${Styles.container} ${
        size === "medium" ? Styles["container--md"] : ""
      }`}
    >
      {children}
    </div>
  );
}
