import React,{useState} from 'react'

export default function TextForm(props) {

    const handleupclick=()=>{
      //  console.log("Uppercase is clicked"+text)
        let newText=text.toUpperCase();
setText(newText);
props.showAlert("Converted to upper case","success");
    }
    const handleonchange=(event)=>{
     //   console.log("On change");
        setText(event.target.value);

    }
    const handlelowclick=()=>{
    
          let newText=text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lower case","success");
      }
      const handleClear=()=>{
      
          let newText=("");
  setText(newText);
  props.showAlert("Text Cleared","success");
      }

  const handlereverse=()=>{
      
          let newText=("");
          for (let i=text.length-1;i>=0;i--)
            {
                newText+=text[i];
            }
  setText(newText);
  props.showAlert("Text get Reversed","success");
      }
      const handlecopy=()=>{
        let text=document.getElementById("TextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
       props.showAlert("Text copied","success");
      }
     const handleextraspace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
     

     } 
    const [text,setText]=useState('Enter Text here'); //Declare a new state variable , Which we call text
    
  return (
    <>
     <div className="container " style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
  <div className="mb-3">

    <textarea className="form-control" value={text} onChange={handleonchange} id="TextBox" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}} rows="12"></textarea>
  </div>
  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Uppercase</button>
  
  <button  disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handlelowclick}>Lowercase</button>

  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlereverse}>Reverse</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy</button>
  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleextraspace}>Remove Extra Space</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary </h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}Words and{text.length}charachters </p>
        <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Time in Minutes For Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
        

     

    </div>
    </>
   
    
  )
}
