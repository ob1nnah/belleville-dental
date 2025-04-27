import './components/HeroSection.css'
import HeroSection from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
   return (
    <>
        <Navbar />
       <main>
           <HeroSection />
       </main>
    </>
   )
}

export default App
