import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <Carousel />
      <Value/>
      <Contact></Contact>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}
