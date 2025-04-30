import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Research from './components/Research/Research.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Education from './components/Education/Education.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <main className="c-pad">
               <Navbar />
               <Routes>
                  <Route path="/" element={<><Hero /><Gallery /></>} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/aboutus" element={<Aboutus />} />
               </Routes>
            </main>
               <Footer />
         </BrowserRouter>
      </>
   )
   // return (
   //    <>
   //       <main className="c-pad">
   //          <Navbar />
   //          <Hero />
   //          <Gallery />
   //          <Education />
   //          <Research />
   //       </main>
   //    </>
   // )
}

export default App
