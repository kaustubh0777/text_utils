import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { useState } from 'react';
import About from './components/About';

function App() {
  return (
    <>
    <div>
     <Navbar title="TextUtils" aboutText="About"/>
     <div className="container my-3">
     {/*<TextForm heading="Enter the text to analyze"/>*/}
     <About/>
     </div>
    </div>
    </>
  );
}

export default App;
