
import React ,{useState} from 'react'




export default function TextForm(props) {

  const Uppercase =()=>{
    
   
    let newText=text.toUpperCase();
    setText(newText)
  }
  const Lowercase =()=>{
    
   
    let newText=text.toLowerCase();
    setText(newText)
  }
  
  const handleOnChange =(event)=>{
   
    setText(event.target.value)

  }
  const [text, setText]=useState('')

    return ( 

<>
      <div className='container'>
        
       <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea name=" " id="myBox" cols="30" rows="10" className='form-control' value={text} onChange={handleOnChange} ></textarea>

      </div>
       
    <button className='btn btn-primary mx-1' onClick={Uppercase} >Convert to Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={Lowercase} >Convert to Lowercase</button>

       </div>
       <div className="container my-3">
        <h2>Your Text Summary</h2>
         <p>{text.split(" ").length} words and {text.length} characters </p>
         <p>{(Math.round(0.008*text.split(" ").length)).toFixed(2)} Minutes Read</p>
       </div>
         <h2>Preview</h2>
         <p>{text} </p>
</>
      
    )
}