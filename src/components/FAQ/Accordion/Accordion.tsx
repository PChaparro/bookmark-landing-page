import { AccordionItemType } from "@/types";
import Styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

type AccordionProps = {
  title: string;
  items: AccordionItemType[];
};

export default function Accordion({ items, title }: AccordionProps) {
  return (
    <div className={Styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
}
