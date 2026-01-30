import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import AdditionalInfo from "@/components/AdditionalInfo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        <About />
        <Clients />
        <Contact />
        <AdditionalInfo />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
