"use client";
import Image from "next/image";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Styles from "./Contact.module.css";
import { FormEvent } from "react";

export default function Contact() {
  return (
    <section className={Styles.background} id="contact">
      <Container size="small">
        <div className={Styles.contact}>
          <p className={Styles.contact__heading}>35.000+ already joined</p>
          <h2 className={Styles.contact__title}>
            Stay up-to-date with what we’re doing
          </h2>
          <form className={Styles.contact__form}>
            <div className={Styles["contact__input-container"]}>
              <input
                className={Styles.contact__input}
                type="email"
                placeholder="Enter your email address"
              />
              <p className={Styles.contact__error}>
                Whoops, make sure it’s an email
              </p>
              <Image
                src="/icons/icon-error.svg"
                alt="Error Icon"
                className={Styles["contact__error-icon"]}
                width={24}
                height={24}
              />
            </div>
            <Button
              type="button"
              style="secondary"
              label="Contact Us"
              callback={(e: FormEvent) => e.preventDefault()}
            />
          </form>
        </div>
      </Container>
    </section>
  );
}
