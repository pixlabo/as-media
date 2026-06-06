import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Infrastructure from "@/components/Infrastructure";
import Clients from "@/components/Clients";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Process />
        <Infrastructure />
        <Stats />
        <Clients />
        <Gallery />
        <Testimonials />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
