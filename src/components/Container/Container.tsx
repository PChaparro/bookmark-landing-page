import Styles from "./Container.module.css";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className={Styles.container}>{children}</div>;
}
