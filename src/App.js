import NavBar from "./components/NavBar";
import BackgroundScene from "./components/BackgroundScene";
import HeroSection from "./components/HeroSection";

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';


function App() {
  return (
    <>
      <BackgroundScene />
      <NavBar />
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </>
  )

}

export default App;
