import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
    const[mode,setMode]=useState('light')
    
    const toggleMode=()=>{
       
    
    if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='black'
    }
    else{
        setMode('light')
        document.body.style.backgroundColor='white'
    }

      }
    return (

       <>
       <Navbar title = "textUtils" about = "About" mode={mode} toggleMode={toggleMode}/>
       <div className={`container my-3 ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
        

       <div className={`container my-3 ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`} style={{ backgroundColor: mode === 'dark' ? '#333' : 'white' }}>
  <TextForm heading="Enter the text to analyze" />
</div>





       {/* <TextForm heading="Enter the text to analyze"/> */}
        {/* <About/> */}
       </div>
       </>




    );
}

export default App;