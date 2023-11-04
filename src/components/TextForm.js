
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

  
  // this code will  select copy whole text and copy as ti is 
// const handleCopy =()=>{
//   console.log( "copy is clicked")
//   let text=document.getElementById('myBox')
//   text.select();
//   navigator.clipboard.writeText(text.value)
// }

//  this code will copy whole text as well as select text only so this has more functionality than upper code
const handleCopy = () => {
const textToCopy = document.getElementById('myBox');
  if (textToCopy) {
    const selectedText = textToCopy.value.substring(textToCopy.selectionStart, textToCopy.selectionEnd);

    if (selectedText) {
      navigator.clipboard.writeText(selectedText).then(
        function () {
          console.log('Selected text copied to clipboard');
        },
        function (err) {
          console.error('Unable to copy selected text: ', err);
        }
      );
    }
    else{
      textToCopy.select();
      navigator.clipboard.writeText(textToCopy.value)
  }
 }
};

//  const handleExtraSpaces =()=>{
//   const textToCopy = document.getElementById('myBox').value;  
//   let newText=textToCopy.split(/[ ]+/)
//   setText(newText.join(" "))
//  }

// upper code and lower code works same
const handleExtraSpaces = () => {
  const textToCopy = document.getElementById('myBox').value;
  let newText = textToCopy.replace(/\s+/g, ' '); // Replace one or more spaces with a single space
  setText(newText);
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
    <button className='btn btn-primary mx-1' onClick={handleExtraSpaces} >Remove Extra Space</button>

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