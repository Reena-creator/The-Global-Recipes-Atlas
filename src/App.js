import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Footer from './components/Footer';
import About from './components/Navbar_Components/About';
import American from './components/Navbar_Components/American';
import Indian from './components/Navbar_Components/Indian';
import Chinese from './components/Navbar_Components/Chinese';
import Thai from './components/Navbar_Components/Thai';
import Italian from './components/Navbar_Components/Italian';
import Mexican from './components/Navbar_Components/Mexican';
import Japanese from './components/Navbar_Components/Japanese';
import Spanish from './components/Navbar_Components/Spanish';
import Card2 from './components/Card2';
import SearchResults from './components/SearchResults';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<><Card/><Carousel/><Card2/></>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/indian" element={<Indian/>}/>
            <Route path="/chinese" element={<Chinese/>}/>
            <Route path="/thai" element={<Thai/>}/>
            <Route path="/italian" element={<Italian/>}/>
            <Route path="/mexican" element={<Mexican/>}/>
            <Route path="/japanese" element={<Japanese/>}/>
            <Route path="/spanish" element={<Spanish/>}/>
            <Route path="/american" element={<American/>}/>
            <Route path="/search/:query" element={<SearchResults/>}/>
          </Routes>
        </Router>        
        {/* <Card/>
        <Carousel/>
        <List/> */}
        <Footer/>
      </div>
    )
  }
}

