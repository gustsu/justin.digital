import BackgroundScene from "./components/BackgroundScene";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

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
      <ContactSection />
      <Footer />
    </>
  )

}

export default App;
