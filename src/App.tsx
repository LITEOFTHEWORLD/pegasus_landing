import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { TokenSection } from "./components/TokenSection/TokenSection";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Features />
      <TokenSection />
      <Footer />
    </div>
  );
};

export default App;