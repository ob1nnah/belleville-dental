import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Research from './components/Research/Research.jsx';

const App = () => {
   return (
    <>
       <main className="c-pad">
            <Navbar />
            <Hero />
            <Research />
       </main>
    </>
   )
}

export default App
