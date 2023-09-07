import Home from './components/Home';
import Navigation from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './App.css'
import { Routes,Route } from 'react-router-dom';

function App() {


  return (
    <>
     <header className="home-header">
        <img className="logo" 
        src="https://previews.123rf.com/images/wikagraphic/wikagraphic2011/wikagraphic201115477/160139588-letter-ds-logo-with-colorful-splash-background-letter-combination-logo-design-for-creative-industry.jpg"/>
        
        <h1>DIVINESHIA SHARON</h1> 
    <Navigation/>
    </header>
    
      
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/About" element ={<About/>}/>
        <Route path ="/Portfolio" element ={<Portfolio/>}/>
      </Routes>
    </>
  )
}

export default App
