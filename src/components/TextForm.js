import { click } from '@testing-library/user-event/dist/click'
import React from 'react'


const uppercase=()=>{

console.log("clicked")
}

export default function TextForm(props) {
    return ( 


      <div>
        
       <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea name=" " id="myBox" cols="30" rows="10" className='form-control'></textarea>
        <button className='btn btn-primary' onClick={uppercase} >Uppercase</button>
        </div>
         
     
      </div>
    )
}