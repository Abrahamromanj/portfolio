import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import * as Components from './components/Components.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Components.Svg/>
    <Components.MainHeader/>
    <Components.PresentationSection/>
    <Components.AboutMeSection/>
   <Components.TechnicalSkillsSection/>
  </React.StrictMode>
)
