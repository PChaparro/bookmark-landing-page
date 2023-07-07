import Container from "../Container/Container";
import Accordion from "./Accordion/Accordion";
import Styles from "./FAQ.module.css";

const questions = [
  {
    title: "What is Bookmark?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    title: "How can I request a new browser?",
    content:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "Is there a mobile app?",
    content:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    title: "What about other Chromium browsers?",
    content:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. More Info 35,000+ already joined Stay up-to-date with what we’re doing Contact Us Features Pricing Contact",
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <Container size="medium">
        <h2 className="subtitle text--centered">Frequently Asked Questions</h2>
        <p className="paragraph text--centered">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </Container>
      <Container size="medium">
        <Accordion items={questions} title="faq" />
      </Container>
    </section>
  );
}
