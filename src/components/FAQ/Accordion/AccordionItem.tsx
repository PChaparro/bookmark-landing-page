"use client";
import { AccordionItemType } from "@/types";
import Styles from "./AccordionItem.module.css";
import Image from "next/image";
import { useState } from "react";

interface AccordionItemProps {
  item: AccordionItemType;
}

export default function AccordionItem({ item }: AccordionItemProps) {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => setIsActive(!isActive);

  return (
    <div
      className={`${Styles["accordion-item"]} ${
        !!isActive && Styles["accordion-item--active"]
      }`}
    >
      <button
        className={Styles["accordion-item__toggler"]}
        onClick={handleToggle}
        onKeyDown={(e) => e.key === "Enter" && handleToggle()}
      >
        <h3 className={Styles["accordion-item__title"]}>{item.title}</h3>
        <Image
          src={`${
            isActive
              ? "/icons/icon-arrow-red.svg"
              : "/icons/icon-arrow-blue.svg"
          }`}
          className={Styles["accordion-item__icon"]}
          alt="arrow down"
          width={18}
          height={12}
        />
      </button>
      <p className={`paragraph ${Styles["accordion-item__content"]}`}>
        {item.content}
      </p>
    </div>
  );
}
