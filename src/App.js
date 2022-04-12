import BackgroundScene from "./components/BackgroundScene";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";

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
      <ProjectSection />
    </>
  )

}

export default App;
