import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Research from './components/Research/Research.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Education from './components/Education/Education.jsx';

const App = () => {
   return (
      <>
         <main className="c-pad">
            <Navbar />
            <Hero />
            <Gallery />
            <Education />
            <Research />
         </main>
      </>
   )
}

export default App
