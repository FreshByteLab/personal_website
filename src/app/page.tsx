import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Section id="about">
          <About />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
<Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
