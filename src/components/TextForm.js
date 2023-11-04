
import React ,{useState} from 'react'




export default function TextForm(props) {

  const handleClear=()=>{
    let newText='';
    setText(newText)
  }

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

const handleCopy =()=>{
  console.log( "copy is clicked")
}


  const [text, setText]=useState('')

    return ( 

<>
      <div className='container'>
        
       <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea name=" " id="myBox" cols="30" rows="10" className='form-control' value={text} onChange={handleOnChange} ></textarea>

      </div>
       
    <button className='btn btn-primary mx-1' onClick={handleClear} >Clear Text</button>
    <button className='btn btn-primary mx-1' onClick={Uppercase} >Convert to Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={Lowercase} >Convert to Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleCopy} >Copy Text</button>

       </div>
       <div className="container my-3">
        <h2>Your Text Summary</h2>
         <p>{text.split(" ").length} words and {text.length} characters </p>
         <p>{0.008*text.split(" ").length} Minutes Read</p>
       </div>
         <h2>Preview</h2>
         <p>{text} </p>
</>
      
    )
}