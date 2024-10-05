import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './utils/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cooking from './pages/Cooking';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import './styles/App.css';
import Projects from './pages/Projects';
import Project1 from './pages/project-articles/project1';

function AppContent() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interests/cooking" element={<Cooking />} />
          <Route path="/interests/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interests/projects" element={<Projects />} />
          <Route path="/interests/projects/project1" element={<Project1 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;