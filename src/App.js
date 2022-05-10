import './App.scss'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Footer, Header, Home, MovieDetails, PageNotFound} from './component';


function App() {
  return (
    <div className="App">
     <div className='container'>
     <Header/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route exact path="/movie/:imdbID" element={<MovieDetails/>}/>
       <Route element={<PageNotFound/>}/>
     </Routes></div>
     <Footer/>
    </div>
  );
}

export default App;
