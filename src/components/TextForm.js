
import React ,{useState} from 'react'



export default function TextForm(props) {

  const [text, setText]=useState('')

  
  //clear text
  const handleClear=()=>{
    let newText='';
    setText(newText)
    props.showAlert("Text Is Cleared" ,"success")
  }

  //uppercase
  const Uppercase =()=>{
    
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Text Is Converted To Uppercase" ,"success")
  }

  //lowercase
  const Lowercase =()=>{
    
   
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Text Is Converted To Lowercase","success")
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
props.showAlert("Copied to Clipboard" ,"success")
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
  props.showAlert("Extra Spaces Removed" ,"success")
}

//to count words 
const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;


 

    return ( 

<>

      <div   className="container"
        style={{
          backgroundColor: props.mode === 'dark' ? '#042743' : 'white', // Change background color
        }}>
        
       <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea  id="myBox" cols="30" rows="10" className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'white' : 'gray' , color:props.mode==='dark' ?'white':'black' }} ></textarea>

      </div>
       
    <button className='btn btn-primary mx-1' onClick={handleClear} >Clear Text</button>
    <button className='btn btn-primary mx-1' onClick={Uppercase} >Convert to Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={Lowercase} >Convert to Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleCopy} >Copy Text</button>
    <button className='btn btn-primary mx-1' onClick={handleExtraSpaces} >Remove Extra Space</button>
  

       </div>
       <div className="container my-3" >
        <h2>Your Text Summary</h2>
         <p>{words} words and {text.length} characters </p>
         <p>{0.008*text.split(" ").length} Minutes Read</p>
       </div>
         <h2>Preview</h2>
         <p>{text.length>0?text:'Enter text in above text area to preview here'}</p>
</>
      
    )
}