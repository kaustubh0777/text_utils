import React from "react";
import { useState } from "react";



export default function TextForm(props) {
    const handleUp=()=>{
        
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLower=()=>{
    
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success")
    }
    const handleReset=()=>
    {
        setText('Enter Your Text Here')
        props.showAlert("Text has been reset to default","success")
    }
    const cleartext=()=>
    {
      setText('');
      props.showAlert("Text Cleared Successfully","success")

    }
    const handleextraspaces=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Removed Extra Spaces","success")

    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value)
    }
    const handleCopy=()=>{
      let text=document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied successfully","success")
    }
    const[text,setText]=useState('Enter Your Text Here')
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} 
        style={{backgroundColor:props.mode==='light'?'white':'#191963',color:props.mode==='dark'?'white':'black'}}>

        </textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUp}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLower}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy
      </button>
      <button className="btn btn-primary mx-2" onClick={cleartext}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleextraspaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary mx-2" onClick={handleReset}>
        Reset to Default
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#17104e'}}>
        <h1>
            Your Text Summary
        </h1>
        <p>{text.split(" ").length} words,{text.length} characters</p>
        <p>Time taken to read {0.008*text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview it Here"}</p>
    </div>
    </>
  );
}
