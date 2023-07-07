import Container from "@/components/Container/Container";
import Extension from "@/components/Extension/Extension";
import FAQ from "@/components/FAQ/FAQ";
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
      <Extension />
      <FAQ />
    </>
  );
}
