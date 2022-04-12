import BackgroundScene from "./components/BackgroundScene";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';


function App() {
  return (
    <>
      <BackgroundScene />
      <NavBar />
      <HeroSection />
      <AboutSection />
    </>
  )

}

export default App;
