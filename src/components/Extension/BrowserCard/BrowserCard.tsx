import Image from "next/image";
import Styles from "./BrowserCard.module.css";
import Button from "@/components/Button/Button";

interface BrowserCardProps {
  name: string;
  logo: string;
  minVersion: number;
  link: string;
  index: number;
}

export default function BrowserCard({
  name,
  logo,
  minVersion,
  link,
  index,
}: BrowserCardProps) {
  return (
    <article
      className={Styles.card}
      style={{ marginBlockStart: `${4 * index}rem` }}
    >
      <Image src={logo} alt={`${name} logo`} width={75} height={75} />
      <h3 className="subtitle subtitle--sm">{name}</h3>
      <p className={`paragraph ${Styles.card__version}`}>
        Minimum version {minVersion}
      </p>
      <div className={Styles.card__separator} />
      <Button
        type="anchor"
        style="primary"
        href={link}
        label="Add & Install Extension"
      />
    </article>
  );
}
