
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Gellery from './components/Gellery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Program from './components/Program'
import Testominals from './components/Testominals'
import Tittle from './components/Tittle'

function App() {
  
  return (
    <>
    <div className="hero">
    
       <Navbar/>
         <Hero/>
         </div>
         <Tittle subtittle='our program' tittle='What We Offer'/>
         <Program/>
         <About/>
         <Tittle subtittle='Gellery' tittle='Explore Our Campus'/>
         <Gellery/>
         <Tittle subtittle='Testominals' tittle='What people says about us'/>
         <Testominals/>
         <Tittle subtittle='Contact Us' tittle='Get in touch'/>
         <Contact/>
    </>
  )
}

export default App
