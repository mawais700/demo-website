import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = ()=>{
  return (
    <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/service' component={Service}/>
          <Redirect to='/'/>
        </Switch>
        <Footer/>
    </>
  );
}

export default App;
