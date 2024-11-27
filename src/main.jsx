import React from 'react';
import { createRoot, hydrateRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import * as Components from './components/Components.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';

const rootElement = document.getElementById("root");

const App = () => {
  return (
    <React.StrictMode>
      <Components.Svg />
      <Components.MainHeader />
      <Components.PresentationSection />
      <Components.AboutMeSection />
      <Components.TechnologiesSection />
      <Components.ExperienceSection />
      <Components.ProjectsSection />
      <Components.EducationSection />
      <Components.ContactSection />
      <Components.Footer />
    </React.StrictMode>
  );
};

if (rootElement.hasChildNodes()) {

  hydrateRoot(rootElement, <App />);

} else {

  createRoot(rootElement).render(<App />);
  
}

// Inicializar AOS después de que React haya renderizado el DOM
document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
});
