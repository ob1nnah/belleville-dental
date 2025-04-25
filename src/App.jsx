import './components/HeroSection.css'
import HeroSection from "./components/Hero.jsx";

const App = () => {
   return (
       <main>
           <header className="header">
               <div className="logo-title-div">
                   <img src="public/logo.svg" alt="Belleville Dental Logo" className="logo"/>
                   <span className="title fw-bolder">Belleville Dental</span>
               </div>
               <nav className="navbar-span">
                   <a href="#research" className="nav-link fw-semibold">RESEARCH</a>
                   <a href="#about-us" className="nav-link fw-semibold">ABOUT US</a>
                   <a href="#education" className="nav-link fw-semibold">EDUCATION</a>
                   <a href="#products" className="nav-link fw-semibold red">PRODUCTS</a>
               </nav>
           </header>
           <HeroSection></HeroSection>
       </main>
   )
}

export default App
