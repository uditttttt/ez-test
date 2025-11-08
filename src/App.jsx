// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutTeam from './components/AboutTeam';
import Contact from './components/Contact'; // 1. Import

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <main>
        <Hero />
        <AboutTeam />
        <Contact /> {/* 2. Add it here */}
      </main>
    </div>
  );
}

export default App;