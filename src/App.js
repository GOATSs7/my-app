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
        document.body.style.backgroundColor='#042743'
    }
    else{
        setMode('light')
        document.body.style.backgroundColor='white'
    }

      }
    return (

       <>
       <Navbar title = "textUtils" about = "About" mode={mode} toggleMode={toggleMode}/>
       <div className={`container my-3 ${mode === 'dark' ? '#042743 text-light' : ''}`}>
        

       <div className={`container my-3 ${mode === 'dark' ? '#042743' : 'bg-light'}`} style={{ backgroundColor: mode === 'dark' ? '#042743' : 'white' }}>
  <TextForm heading="Enter the text to analyze" mode={mode}/>
</div>

 



       {/* <TextForm heading="Enter the text to analyze"/> */}
        {/* <About/> */}
       </div>
       </>




    );
}

export default App;