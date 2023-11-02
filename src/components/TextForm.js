import { click } from '@testing-library/user-event/dist/click'
import React from 'react'


const uppercase=()=>{

console.log("clicked")
}

export default function TextForm(props) {
    return ( 


      <div>
        <div className='mb-3'>
            <h1>{props.heading}</h1>
            <label htmlFor="myBox" className='form-lable'>Enter Text Here</label>
       <div className="container">

        <textarea name=" " id="myBox" cols="30" rows="10" className='form-control'></textarea>
       </div>
       <button onClick={uppercase} >Uppercase</button>
        </div>
      </div>
    )
}