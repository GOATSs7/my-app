
import React ,{useState} from 'react'




export default function TextForm(props) {

  const uppercase =()=>{
    
   
    let newText=text.toUpperCase();
    setText(newText)
  }
  
  const handleOnChange =(event)=>{
   
    setText(event.target.value)

  }
  const [text, setText]=useState('Enter text here')

    return ( 


      <div>
        
       <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea name=" " id="myBox" cols="30" rows="10" className='form-control' value={text} onChange={handleOnChange} ></textarea>

      </div>
       
    <button className='btn btn-primary' onClick={uppercase} >Convert to Uppercase</button>

       </div>
    )
}