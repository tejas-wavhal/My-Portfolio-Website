import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Services from './components/Services';


function App() {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
