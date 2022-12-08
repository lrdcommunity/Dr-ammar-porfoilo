import React from 'react';

import Aboutme from './Components/About_me/Aboutme';
import Contact from './Components/Contact Form/Contact';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main_section/Main';
import Skills from './Components/Myskills/Skills';
import Educations from './Components/My_Education/Educations';
import Navbar from './Components/Navbar/Navbar';
import Employement from './Components/Slider/Employement';
import './App.css'
import Awards from './Components/Awards/Awards';


function App() {
  return (
    <>
    <Navbar/>
    <Main />
    <Educations/>
    <Skills/>
    <Aboutme/>
    <Employement/>
    <Awards/>
    <Contact/>
    <Footer/>
</>
  );
}

export default App;
