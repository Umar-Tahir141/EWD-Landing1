import Hero from "./sections/Hero/Hero";
import StrategySection from "./sections/strategy-sectiom/StrategySection";
import Uxui from "./sections/ux-ui-section/uxui"
import Web from "./sections/web-section/web"
import Market from "./sections/marketing-section/market"
import Ai from "./sections/ai-section/ai"
import Business from "./sections/business-section/business"
import AgencySections from "./sections/agency-section/agency"
import Footer from "./sections/footer-section/PageSection"
import Navbar from "./sections/navbar/navbar"
function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <StrategySection />
      <Uxui/>
      <Web/>
      <Market/>
      <Ai/>
      <Business/>
      <AgencySections/>
      <Footer/>
    </>
  );
}

export default App;