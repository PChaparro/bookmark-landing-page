"use client";
import { useState } from "react";
import Styles from "./FeaturesSlider.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";

const features = [
  {
    nav: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/images/illustration-features-tab-1.svg",
  },
  {
    nav: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/images/illustration-features-tab-2.svg",
  },
  {
    nav: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/images/illustration-features-tab-3.svg",
  },
];

export default function FeaturesSlider() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const handleFeatureClick = (index: number) => setActiveFeatureIndex(index);

  return (
    <>
      {/* Features selection "header" */}
      <Container size="medium">
        <ul className={Styles.options}>
          {features.map((feature, index) => (
            <li
              key={`feature-${index}`}
              className={`${Styles.option} ${
                activeFeatureIndex === index ? Styles["option--active"] : ""
              }`}
              onClick={() => handleFeatureClick(index)}
            >
              {feature.nav}
            </li>
          ))}
        </ul>
      </Container>
      {/* Features "renderer" */}
      <div className={Styles["feature-wrapper"]}>
        <Container size="large">
          <article className={Styles.feature}>
            <Image
              src={features[activeFeatureIndex].image}
              alt={features[activeFeatureIndex].title}
              className={Styles.feature__image}
              width={536}
              height={380}
            />
            <div className={Styles["feature__texts"]}>
              <h3 className="subtitle">{features[activeFeatureIndex].title}</h3>
              <p className="paragraph">
                {features[activeFeatureIndex].description}
              </p>
              <Button type="anchor" style="primary" label="More Info" />
            </div>
          </article>
          <div className={Styles["feature__shape"]} />
        </Container>
      </div>
    </>
  );
}
