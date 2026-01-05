import "./App.css";
import About from "./components/About";
import Delivery from "./components/Delivery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Delivery />
      <About />
      <Product />
      <Info />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
