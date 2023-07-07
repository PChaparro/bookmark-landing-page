import Container from "@/components/Container/Container";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Container size="large">
        <Navbar />
      </Container>
      <Hero />
      <Features />
    </>
  );
}
