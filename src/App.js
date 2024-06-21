
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Door from './components/Door/Door';
import Details from './components/Details/Details';
import WhyFeul from './components/WhyGofeul/WhyFeul';
import Entails from './components/Entails/Entails';
import Features from './components/Features/Features';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQ/FAQ';
import Phonemap from './components/Phonemap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Hero/>
      </header>

      <Door/>

      <Entails/>
      <WhyFeul/>
      <Features/>
      <Phonemap/>
      <FAQ/>
      <Details/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
