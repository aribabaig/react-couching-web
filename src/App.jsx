
import '/App.css'
import About from 'src/components/About'
import Contact from 'src/components/Contact'
import Gellery from 'src/components/Gellery'
import Hero from 'src/components/Hero'
import Navbar from 'src/components/Navbar'
import Program from 'src/components/Program'
import Testominals from 'src/components/Testominals'
import Tittle from 'src/components/Tittle'

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
