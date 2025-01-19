import LandingPage from "./components/LandingPage"
import DinoDisplay from "./components/DinoDisplay/DinoDisplay";
import Quiz from "./components/Quiz";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import DinoMap from "./components/DinoMap";
import Ecommerce from "./components/Ecommerce";

function App() {
  return (
    <div className="">
      <LandingPage />
      <DinoDisplay />
      <DinoMap />
      <Timeline />
      <Quiz />
      <Ecommerce />
      <Footer />
    </div>
  );
}

export default App;
