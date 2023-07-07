import Styles from "./Center.module.css";

export default function Center({ children }: { children: React.ReactNode }) {
  return <div className={Styles.center}>{children}</div>;
}
