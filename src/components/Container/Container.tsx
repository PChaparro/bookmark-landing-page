import Styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  size: "large" | "medium" | "small";
}

const SizeClasses = {
  large: "",
  medium: Styles["container--md"],
  small: Styles["container--sm"],
};

export default function Container({ children, size }: ContainerProps) {
  return (
    <div className={`${Styles.container} ${SizeClasses[size]}`}>{children}</div>
  );
}
